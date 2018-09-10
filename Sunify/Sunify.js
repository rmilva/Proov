var url;
var weatherVar;

function searchAndSetWeatherData() {
	setUrl();
	getDataFromUrl();
}

function setUrl() {
	var cityName = document.getElementById("city-name").value;
	var countryCode = document.getElementById("country-code").value;

	url = "http://api.openweathermap.org/data/2.5/weather?q="+ cityName + "," + countryCode +"&appid=52e04df291963502e0c4d4c82c214446";
}

function getDataFromUrl() {
 	fetch(url)
 	.then(result => result.json())
 	.then(jsonData => {
 		weatherVar = jsonData;
 		setData();
 		checkError();
 	})
 	.catch(error => displayError());
}


function setData() {
	setCityName();
	setTemp();
	setWeatherIcon();
	displaySearchBar();
}

function setWeatherIcon(){
	var icon = weatherVar.weather[0].icon;
	document.getElementById('icon').src = "https://openweathermap.org/img/w/" + icon + ".png";
}

function setCityName(){
	var cityName = weatherVar.name;
	document.getElementById('cityName').innerHTML = cityName;
}

function setTemp(){
	var temperature = weatherVar.main.temp;
	document.getElementById('degree').innerHTML = kelvinToCelcius(temperature);
}

function kelvinToCelcius(kelvin) {
  return Math.round( (kelvin-273.15) * 10 ) / 10;
}

function displaySearchBar() {
	document.getElementById('searchBar').style.display = "block";
}

function checkError() {
	if(document.getElementById('error').getAttribute("style")) {
		document.getElementById('error').style.display = "none";
	}

}


function displayError() {
	document.getElementById('error').style.display = "block";
}




