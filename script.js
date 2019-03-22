var map;
function initMap() {
	map = new google.maps.Map(document.querySelector('.map'), {
    center: {lat: 48.856613, lng: 2.352222},
    zoom: 14
   });

	var marker = new google.maps.Marker({position : loc, map: map});
}

// Sticky menu background - Permet de faire transition quand on descend

window.addEventListener('scroll', function (){

	if(window.scrollY > 150){
		document.querySelector('#navbar').style.opacity = 0.9;
	} else {
		document.querySelector('#navbar').style.opacity = 1;

	}

});