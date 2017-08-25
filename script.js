$(document).ready(function() {

	var hourNow = new Date().getHours();
	var greeting = "Good "

	if (hourNow > 18) {
		greeting += "Evening!";
	} else if (hourNow > 12) {
		greeting += "Afternoon!";
	} else if (hourNow > 0) {
		greeting += "Morning!"
	} else {
		greeting = "Welcome!"
	}

	var content = '<h5 class="contrast-font center" id="home"> ' + greeting + ' </h5> \n <br>';

	$("img.profile").before(content);

});