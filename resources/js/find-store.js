$("#Estado").on("change", function () {
	let selectedFilter = $(this).val();
	if (selectedFilter.startsWith(selectedFilter)) {
		$(".sucursal-list .sucursal-item").hide();
		if (selectedFilter != "") {
			$("." + selectedFilter)
				.parent()
				.show();
			document.getElementById("info_store").innerHTML = "";
		} else {
			initMap();
			document.getElementById("info_store").innerHTML = "";
			$(".sucursal-list .sucursal-item").show();
		}
	}
});
// Initialize and add the map
function initMap() {
	// The location of mex
	const mex = { lat: 23.634501, lng: -102.5527848 };
	// The map, centered at mex
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: mex,
	});
	const markersArray = [];
	// The marker, positioned at mex
	var markerImage = {
		url: "resources/images/PM-ON.png",
		scaledSize: new google.maps.Size(35, 35),
		anchor: new google.maps.Point(7, 7),
	};

	function markStore(storeInfo) {
		// Create a marker and set its position.
		var marker = new google.maps.Marker({
			map: map,
			icon: markerImage,
			position: storeInfo.location,
			title: storeInfo.name,
		});
	}

	// show store info in text box
	function showStoreInfo(storeInfo) {
		var info_div = document.getElementById("info_store");
		info_div.innerHTML =
			"Store name: " + storeInfo.name + "<br>Hours: " + storeInfo.hours;
	}

	var stores = [
		{
			name: "Artz Pedregal",
			location: { lat: 19.31390796, lng: -99.21933997 },
		},
		{
			name: "Forum Buenavista",
			location: { lat: 19.44829367, lng: -99.15271328 },
		},
		{
			name: "Oasis",
			location: { lat: 19.34623276, lng: -99.17860795 },
		},
		{
			name: "Parque Delta",
			location: { lat: 19.40541728, lng: -99.15532413 },
		},
		{
			name: "Parque Tezontle",
			location: { lat: 19.38415285, lng: -99.08275956 },
		},
		{
			name: "Paseo Acoxpa",
			location: { lat: 19.30016978, lng: -99.13715555 },
		},
		{
			name: "Perisur",
			location: { lat: 19.30655275, lng: -99.18974971 },
		},
		{
			name: "Via vallejo",
			location: { lat: 19.48769124, lng: -99.1525504 },
		},
		{
			name: "Mundo E",
			location: { lat: 19.52515817, lng: -99.2287828 },
		},
		{
			name: "Parque Toreo",
			location: { lat: 19.45486788, lng: -99.21856419 },
		},
		{
			name: "Plaza Satelite",
			location: { lat: 19.51009233, lng: -99.23383615 },
		},
		{
			name: "Town Square Metepec",
			location: { lat: 19.26804709, lng: -99.60499117 },
		},
		{
			name: "Galerias Guadalajara",
			location: { lat: 20.67794544, lng: -103.4324581 },
		},
		{
			name: "Midtown Jalisco",
			location: { lat: 20.69470544, lng: -103.3766872 },
		},
		{
			name: "Punto Sur",
			location: { lat: 20.69452883, lng: -103.3766874 },
		},
		{
			name: "Averanda Cuernavaca",
			location: { lat: 18.93388426, lng: -99.19665806 },
		},
		{
			name: "Paseo La Fe",
			location: { lat: 25.72005308, lng: -100.2186599 },
		},
		{
			name: "Punto Valle",
			location: { lat: 25.658834, lng: -100.354731 },
		},
		{
			name: "Angelopolis",
			location: { lat: 19.03121762, lng: -98.23340278 },
		},
		{
			name: "Galerias Serdan",
			location: { lat: 19.07077949, lng: -98.22539294 },
		},
		{
			name: "Antea Queretaro",
			location: { lat: 20.66036797, lng: -100.4318025 },
		},
		{
			name: "Malecon Americas",
			location: { lat: 21.1467721, lng: -86.8226617 },
		},
		{
			name: "Paseo del Carmen",
			location: { lat: 20.62119242, lng: -87.0762045 },
		},
		{
			name: "Antara",
			location: { lat: 19.43919812, lng: -99.20253429 },
		},
	];

	stores.forEach(function (store) {
		markStore(store);
	});

	$(".sucursal-item-summary a").on("click", function () {
		lats = $(this).attr("data-latitude");
		longs = $(this).attr("data-longitude");
		map.setCenter(new google.maps.LatLng(lats, longs));
		var latLng = new google.maps.LatLng(lats, longs);
		var markersHistory = new google.maps.Marker({
			icon: markerImage,
			position: latLng,
			map: map,
		});
		map.setZoom(16);
		clearOverlays();
	});

	function clearOverlays() {
		for (var i = 0; i < markersArray.length; i++) {
			markersArray[i].setMap(null);
		}
		markersArray.length = 0;
	}
}

window.initMap = initMap;

function mostrarSucursales(data) {
	var info_div = document.getElementById("info_store");
	console.log(data);
	switch (data) {
		case "1":
			info_div.innerHTML =
				"<span class='title-Store'>Artz Pedregal</span>" +
				"<span class='address-Store'>Boulevard Adolfo Ruíz Cortinez #3729, Col. Jardines del Pedregal <br /> Alcaldía Alvaro Obregón <br />Ciudad de México <br />c.p. 1900 </span>" +
				"<span class='phone-Store'> Teléfono: 55 2589 3511</span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "2": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Forum Buenavista</span>" +
				"<span class='address-Store'>Eje 1 Norte Mosqueta #259 Col. Buenavista<br />Alcaldía Cuauhtémoc<br>Ciudad de México<br /> c.p. 3304</span>" +
				"<span class='phone-Store'> Teléfono: 55 5541 6733 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "3": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Oasis</span>" +
				"<span class='address-Store'>Avenida Universidad #1778 Col. Romero de Terreros<br />Alcaldía Coyoacán<br />Ciudad de México<br /> c.p. 2288</span>" +
				"<span class='phone-Store'> Teléfono: 55 5658 7026 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "4": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Parque Delta</span>" +
				"<span class='address-Store'>Avenida Cuauhtémoc #462 Col. Narvarte<br />Alcandía Benito Juárez<br />Ciudad de México<br /> c.p. 1552</span>" +
				"<span class='phone-Store'> Teléfono: 55 5440 4179 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "5": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Parque Tezontle</span>" +
				"<span class='address-Store'>Avenida Canal de Tezontle #1512, Col. Alfonso Ortiz Tirado<br />Delegación Iztapalapa<br />Ciudad de México<br /> c.p. 9020</span>" +
				"<span class='phone-Store'> Teléfono: 55 9129 0364 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "6": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Paseo Acoxpa</span>" +
				"<span class='address-Store'>Calzada Acoxpa #430, Col. Vergel del Sur<br /> Alcaldía Tlalpan<br />Ciudad de México<br /> c.p. 14340</span>" +
				"<span class='phone-Store'> Teléfono: 55 5160 6901 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "7": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Perisur</span>" +
				"<span class='address-Store'>Anillo Periférico Sur #4690, Col. Insurgentes Cuicuilco<br />Alcaldía Coyoacán<br />Ciudad de México<br /> c.p. 2368</span>" +
				"<span class='phone-Store'> Teléfono: 55 5528 7602 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "8": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Via vallejo</span>" +
				"<span class='address-Store'>Calzada Vallejo #1090, Col. Santa Cruz De Las Salinas<br />Alcaldía Azcapotzalco<br />Ciudad de México<br /> c.p. 01248</span>" +
				"<span class='phone-Store'> Teléfono: 55 9130 7004 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "9": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Mundo E</span>" +
				"<span class='address-Store'>Boulevard Manuel Avila Ca,macho #1007, Col. San Lucas Tepetlacalco<br />Tlalnepantla de Baz<br />Estado de México<br /> c.p.</span>" +
				"<span class='phone-Store'> Teléfono: 55 5365 4075 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "10":
			info_div.innerHTML =
				"<span class='title-Store'>Parque Toreo</span>" +
				"<span class='address-Store'>Boulevard Manuel Avila Camacho #5, Col. Franccionamiento Lomas de Sotelo<br />Naucalpan de Juárez<br />Etado de México<br /> c.p. 53390</span>" +
				"<span class='phone-Store'> Teléfono: 55 5557 1329 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "11": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Plaza Satelite</span>" +
				"<span class='address-Store'>Plaza Satélite 4841, Circuito Centro Comercial #2251<br />Naucalpan de Juárez<br />Estado de México<br /> c.p. 22080</span>" +
				"<span class='phone-Store'> Teléfono: 55 2990 0528 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;
		case "12": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Town Square Metepec</span>" +
				"<span class='address-Store'>Avenida Ignacio Comomfort #1100, Col. Residencial La Providencia<br/>Metepec<br />Estado de México<br /> c.p. 52177</span>" +
				"<span class='phone-Store'> Teléfono: 72 2688 8722 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "13": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Galerias Guadalajara</span>" +
				"<span class='address-Store'>Avenida Rafael Sanzio #150 Col. Camichines Vallarta<br />Zapopan<br />Jalisco<br /> c.p. 45030</span>" +
				"<span class='phone-Store'> Teléfono: 33 3113 9843 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "14": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Midtown Jalisco</span>" +
				"<span class='address-Store'>Avenida Adolfo López Mateos Norte #2405, Col. Italia Providencia<br />Guadalajara<br/>Jalisco<br /> c.p. 44648</span>" +
				"<span class='phone-Store'> Teléfono: 33 3113 5889 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "15": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Punto Sur</span>" +
				"<span class='address-Store'>Avenida Paseo Punto Sur #235, Local LN05, Col. Los Gavilanes<br />Tlajomulco de Zuñiga<br />Jalisco<br /> c.p. 45645</span>" +
				"<span class='phone-Store'> Teléfono: 33 1656 5251 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "16": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Averanda Cuernavaca</span>" +
				"<span class='address-Store'>Autopista México - Acapulto, Km. 87.5, Col. Flores Magón<br/>Cuernavaca<br />Morelos<br /> c.p. 62370</span>" +
				"<span class='phone-Store'> Teléfono: 77 7202 5975 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "17": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Paseo La Fe</span>" +
				"<span class='address-Store'>Avenida Miguel Alemán #200 Col. Talaverna<br />San Nicolás de los Garza<br />Nuevo León<br /> c.p. 66473</span>" +
				"<span class='phone-Store'> Teléfono: 81 1357 4717 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "18": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Punto Valle</span>" +
				"<span class='address-Store'>Río Missouri #555 Oriente, Col. Del Valle <br />San Pedro Garza García<br />Nuevo León<br /> c.p. 66220</span>" +
				"<span class='phone-Store'> Teléfono: 81 1359 4317 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "19": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Angelopolis</span>" +
				"<span class='address-Store'>Boulevard del Niño Poblano #2510, Local UC2, Col. Concepción La Cruz<br />Puebla<br /> c.p. 72450</span>" +
				"<span class='phone-Store'> Teléfono: 22 2257 0943 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "20": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Galerias Serdan</span>" +
				"<span class='address-Store'>Boulevard Hermanos Serdán #270, Col. Rancho Posadas<br> Puebla<br /> Puebla <br /> c.p. 76062</span>" +
				"<span class='phone-Store'> Teléfono: 22 2268 1972 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "21": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Antea Queretaro</span>" +
				"<span class='address-Store'>Carretera Querétaro - San Luis Potosí #12401 Querétaro <br />Querétaro <br /> c.p. 76127</span>" +
				"<span class='phone-Store'> Teléfono: 44 2688 6050 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "22": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Malecon Americas</span>" +
				"<span class='address-Store'>Avenida Bonampak SM 6, Manzana 1 LT 1,7 <br>Cancún <br /> Quintana Roo <br />  c.p. 77500</span>" +
				"<span class='phone-Store'> Teléfono: 98 4879 3023 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "23": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Paseo del Carmen</span>" +
				"<span class='address-Store'>Avenida 10 Conla 1a. Sur S7N, Manzana 8 OTE. Col. Centro <br />Playa del Carmen <br /> Quintana Roo <br /> c.p. 77710</span>" +
				"<span class='phone-Store'> Teléfono: 98 4879 3023 </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;

		case "24": // Put multiple cases on the same
			// line to save vertical space.
			info_div.innerHTML =
				"<span class='title-Store'>Antara</span>" +
				"<span class='address-Store'>Av. Ejército Nacional Mexicano 843-B, Granada<br /> MIGUEL HIDALGO <br />Ciudad de México <br />c.p. 11520 </span>" +
				"<span class='phone-Store'> Teléfono: -- </span>" +
				"<span class='hour-Store'> Horario: Lunes a Domingo 11:00 a.m. a 9:00 p.m. ";
			break;
		default:
			console.log("strange");
			break;
	}
}