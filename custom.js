'use strict'

////////////////////// Google Map //////////////////////

function initMap() {

        // Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
        var styledMapType = new google.maps.StyledMapType(
            [
              // {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
              {elementType: 'geometry', stylers: [{color: '#8C7561'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#FFFAE2'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
              }
            ],
            {name: 'Styled Map'});

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var map = new google.maps.Map(document.getElementById('map-canvas'), {
          center: {lat: -7.33172, lng: 112.723624},
          zoom: 17,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          },
          gestureHandling: 'cooperative',
          scrollwheel: false,
          zoomControl: true
        });

        var image = 'icon/location_32px_green.png'
        var marker = new google.maps.Marker({
  				 position: {lat: -7.33172, lng: 112.723624},
  				 map: map,
  				 title: 'Indah Healthy Bakery',
           icon: image
  		 });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
      }

/////////////////////// Twitter /////////////////////

!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id)){js=d.createElement(s);
  js.id=id;
  js.src=p+"://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js,fjs);
}}(document,"script","twitter-wjs");


////////////////////// Drawer //////////////////////

const home = document.querySelector('.home')

home.addEventListener('click', function (e) {
  e.preventDefault
  this.parentNode.classList.add('slide-in')
})

const spicy = document.querySelector('.spicy')
const menu1 = document.querySelector('#menu1')

menu1.classList.add('slide-in')

spicy.addEventListener('click', function(){
  menu3.classList.add('slide-in')
  menu2.classList.add('slide-in')
  setTimeout(function () {
    menu1.classList.toggle('slide-in')
  },1000)
})

const healthy = document.querySelector('.healthy')
const menu2 = document.querySelector('#menu2')

menu2.classList.add('slide-in')

healthy.addEventListener('click', function(){
  menu1.classList.add('slide-in')
  menu3.classList.add('slide-in')
  setTimeout(function () {
    menu2.classList.toggle('slide-in')
  },1000)
})


const sweet = document.querySelector('.sweet')
const menu3 = document.querySelector('#menu3')

menu3.classList.add('slide-in')

sweet.addEventListener('click', function(){
  menu1.classList.add('slide-in')
  menu2.classList.add('slide-in')
  setTimeout(function () {
    menu3.classList.toggle('slide-in')
  },1000)
})


////////////////////// Bread Name Style //////////////////////

if (document.documentElement.clientWidth < 480) {
const breadName = document.querySelectorAll('.tooltip')
for (var i=0; i<breadName.length; i++) {
  breadName[i].style.cssText = "text-decoration: underline;"
}
}
