$(window).load(function(){
     $('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top" : topMargin+"px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

});
/* END ------------------------------------------------------- */


$('#countdown').countdown({
	date: "June 08, 2018 15:00:00",
	render: function(data) {
	  var el = $(this.el);
	  el.empty()
	    .append("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div>")
	    .append("<div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div>")
	    .append("<div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div>")
	    .append("<div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
	}
});

/* particlesJS('dom-id', params);
		/* @dom-id : set the html tag id [string, optional, default value : particles-js]
		/* @params: set the params [object, optional, default values : check particles.js] */

		/* config dom id (optional) + config particles params */
		particlesJS('particle-js',
		  
		  {
			"particles": {
			  "number": {
				"value": 80,
				"density": {
				  "enable": true,
				  "value_area": 800
				}
			  },
			  "color": {
				"value": "#ffffff"
			  },
			  "shape": {
				"type": "circle",
				"stroke": {
				  "width": 0,
				  "color": "#000000"
				},
				"polygon": {
				  "nb_sides": 5
				},
				"image": {
				  "src": "img/github.svg",
				  "width": 100,
				  "height": 100
				}
			  },
			  "opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
				  "enable": false,
				  "speed": 1,
				  "opacity_min": 0.1,
				  "sync": false
				}
			  },
			  "size": {
				"value": 5,
				"random": true,
				"anim": {
				  "enable": false,
				  "speed": 40,
				  "size_min": 0.1,
				  "sync": false
				}
			  },
			  "line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			  },
			  "move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"attract": {
				  "enable": false,
				  "rotateX": 600,
				  "rotateY": 1200
				}
			  }
			},
			"interactivity": {
			  "detect_on": "canvas",
			  "events": {
				"onhover": {
				  "enable": true,
				  "mode": "repulse"
				},
				"onclick": {
				  "enable": true,
				  "mode": "push"
				},
				"resize": true
			  },
			  "modes": {
				"grab": {
				  "distance": 400,
				  "line_linked": {
					"opacity": 1
				  }
				},
				"bubble": {
				  "distance": 400,
				  "size": 40,
				  "duration": 2,
				  "opacity": 8,
				  "speed": 3
				},
				"repulse": {
				  "distance": 200
				},
				"push": {
				  "particles_nb": 4
				},
				"remove": {
				  "particles_nb": 2
				}
			  }
			},
			"retina_detect": true,
			"config_demo": {
			  "hide_card": false,
			  "background_color": "#b61924",
			  "background_image": "",
			  "background_position": "50% 50%",
			  "background_repeat": "no-repeat",
			  "background_size": "cover"
			}
		  }
		);