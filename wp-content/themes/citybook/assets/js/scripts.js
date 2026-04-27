(function($){
    "use strict"; 
    //   all ------------------
    function initCitybook() {
        //   loader ------------------
        $(".loader-wrap").fadeOut(300, function () {
            $("#main-theme").animate({
                opacity: "1"
            }, 300);
        });
        if($('#top-menu').length){
            $('#top-menu li.menu-item-has-children > a').append(' <i class="fa fa-caret-down"></i>')
        }
        //   Background image ------------------
        var a = $(".bg");
        a.each(function (a) {
            if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
        });
        //   scrollToFixed------------------
        if($('.dashboard-content-col').outerHeight() > $(".fixed-bar").outerHeight()){
            $(".fixed-bar").scrollToFixed({
                minWidth: 1064,
                marginTop: 90,
                removeOffsets: true,
                limit: function () {
                    var a = $(".limit-box").offset().top - $(".fixed-bar").outerHeight() - 70;
                    return a;
                },
                spacerClass: 'dashboard-fixed-spacer'
            });
        }
            
        $(".back-to-filters").scrollToFixed({
            minWidth: 1224,
            zIndex: 12,
            marginTop: 130,
            removeOffsets: true,
            limit: function () {
                var a = $(".limit-box").offset().top - $(".back-to-filters").outerHeight(true) - 10;
                return a;
            },
            spacerClass: 'back-to-filter-fixed-spacer'
        });
        var adminbarheight = 0;
        if($('#wpadminbar').length) adminbarheight = $('#wpadminbar').outerHeight()
        if($(".scroll-nav-wrapper").length){
            $(".scroll-nav-wrapper").each(function(){
                var $lscn = $(this),
                    mW = 769;
                if($lscn.hasClass('lscroll-mobile-yes')) mW = 100

                $lscn.scrollToFixed({
                    minWidth: mW,
                    zIndex: 12,
                    marginTop: 80 + adminbarheight,
                    removeOffsets: true,
                    limit: function () {
                        var a = $(".limit-box").offset().top - $(".scroll-nav-wrapper").outerHeight(true) - 10;
                        return a;
                    },
                    spacerClass: 'scroll-nav-fixed-spacer'
                });
            })
        }
        
                
        //   Slick------------------
    	var sbp = $('.swiper-button-prev'),
    		sbn = $('.swiper-button-next');
        $('.fw-carousel').slick({
            dots: true,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            centerMode: false,
            arrows: false,
            variableWidth: true
        });
        sbp.on("click", function () {
            $('.fw-carousel').slick('slickPrev');
        })

        sbn.on("click", function () {
            $('.fw-carousel').slick('slickNext');
        })
        $('.slideshow-container').slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            fade: true,
            cssEase: 'ease-in',
            infinite: true,
            speed: 1000
        });
        $('.single-slider').slick({
            infinite: true,
            slidesToShow: 1,
            dots: true,
            arrows: false,
            adaptiveHeight: true
        });
        sbp.on("click", function () {
            $(this).closest(".single-slider-wrapper").find('.single-slider').slick('slickPrev');
        });
        sbn.on("click", function () {
            $(this).closest(".single-slider-wrapper").find('.single-slider').slick('slickNext');
        });

        $('.slider-container').slick({
            infinite: true,
            slidesToShow: 1,
            dots: true,
            arrows: false,
        });
        sbp.on("click", function () {
            $(this).closest(".slider-container-wrap").find('.slider-container').slick('slickPrev');

        });
        sbn.on("click", function () {
            $(this).closest(".slider-container-wrap").find('.slider-container').slick('slickNext');
        });
        $('.single-carousel').slick({
            infinite: true,
            slidesToShow: 3,
            dots: true,
            arrows: false,
            centerMode: true,
            responsive: [{
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false,
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                    }
                }
            ]

        });
        sbp.on("click", function () {
            $(this).closest(".carousel ").find('.single-carousel').slick('slickPrev');

        });
        sbn.on("click", function () {
            $(this).closest(".carousel").find('.single-carousel').slick('slickNext');
        });
        // $('.listing-carousel').slick({
        //     infinite: true,
        //     slidesToShow: 5,
        //     slidesToScroll: 3,
        //     dots: true,
        //     arrows: false,
        //     centerMode: true,
        //     centerPadding: '0',
        //     responsive: [{
        //             breakpoint: 1500,
        //             settings: {
        //                 slidesToShow: 4,
        //                 slidesToScroll: 2,
        //             }
        //         },
        //         {
        //             breakpoint: 1224,
        //             settings: {
        //                 slidesToShow: 3,
        //                 slidesToScroll: 1,
        //             }
        //         },

        //         {
        //             breakpoint: 1024,
        //             settings: {
        //                 slidesToShow: 2,
        //                 slidesToScroll: 1,
        //             }
        //         },
        //         {
        //             breakpoint: 800,
        //             settings: {
        //                 slidesToShow: 1,
        //                 slidesToScroll: 1,
        //             }
        //         }
        //     ]

        // });
        // sbp.on("click", function () {
        //     $(this).closest(".list-carousel").find('.listing-carousel').slick('slickPrev');
        // });
        // sbn.on("click", function () {
        //     $(this).closest(".list-carousel").find('.listing-carousel').slick('slickNext');
        // });
        $('.client-carousel').slick({
            infinite: true,
            slidesToShow: 5,
            dots: false,
            arrows: false,
            centerMode: true,
            responsive: [{
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 4,
                        centerMode: false,
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                    }
                }
            ]

        });
        $('.sp-cont-prev').on("click", function () {
            $(this).closest(".spons-list").find('.client-carousel').slick('slickPrev');
        });
        $('.sp-cont-next').on("click", function () {
            $(this).closest(".spons-list").find('.client-carousel').slick('slickNext');
        });
        //sidebar ad

        $('.sidebar-ad-carousel').slick({
            infinite: true,
            slidesToShow: 1,
            dots: true,
            arrows: false,
            centerMode: false,
            autoplay: true,
        });

        
        //   lightGallery------------------
        $(".image-popup").lightGallery({
            selector: "this",
            cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
            download: false,
            counter: false,

            subHtmlSelectorRelative: true
        });
        var o = $(".lightgallery"),
            p = o.data("looped");
        o.lightGallery({
            selector: ".lightgallery a.popup-image",
            cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
            download: false,
            loop: false,
    		counter: false,

            subHtmlSelectorRelative: true
        });
        //   appear------------------
        $(".stats").appear(function () {
            $(".num").countTo();
        });
        
        
        //   scroll to------------------
        $(".custom-scroll-link").on("click", function () {
            var a = 70 + $(".scroll-nav-wrapper").height() + adminbarheight;
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                var b = $(this.hash);
                b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
                if (b.length) {
                    $("html,body").animate({
                        scrollTop: b.offset().top - a
                    }, {
                        queue: false,
                        duration: 1200,
                        easing: "easeInOutExpo"
                    });
                    return false;
                }
            }
        });
        $(".scroll-init  ul ").singlePageNav({
            filter: ":not(.external)",
            updateHash: false,
            offset: 120 + adminbarheight,
            threshold: 120,
            speed: 1200,
            currentClass: "act-scrlink"
        });
        $('.scroll-init a').each(function(){
            if(!$(this.hash).length){
                $(this).parent().hide()
            }
        })
        $(".to-top").on("click", function (a) {
            a.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        // scroll animation ------------------
        $(window).on("scroll", function (a) {
            if ($(this).scrollTop() > 150) {
                $(".to-top").fadeIn(500);
            } else {
                $(".to-top").fadeOut(500);
            }
        });
        
        $('input[type="range"].distance-radius').rangeslider({
            polyfill: false,
            onInit: function () {
                this.output = $(".distance-title span").html(this.$element.val());
            },
            onSlide: function (
                position, value) {
                this.output.html(value);
            }
        });
      

        // Styles ------------------
        if ($("footer.main-footer").hasClass("fixed-footer")) {
            $('<div class="height-emulator fl-wrap"></div>').appendTo("#main-theme");
        }
        function csselem() {
            $(".height-emulator").css({
                height: $(".fixed-footer").outerHeight(true)
            });
            $(".slideshow-container .slideshow-item").css({
                height: $(".slideshow-container").outerHeight(true)
            });
            $(".slider-container .slider-item").css({
                height: $(".slider-container").outerHeight(true)
            });
        }
        csselem();
        // Mob Menu------------------
        $(".nav-button-wrap").on("click", function () {
            $(".main-menu").toggleClass("vismobmenu");
        });
        function mobMenuInit() {
            var ww = $(window).width();
            if (ww < 1064) {
                $(".menusb").remove();
                $(".main-menu").removeClass("nav-holder");
                $(".main-menu nav").clone().addClass("menusb").appendTo(".main-menu");
                $(".menusb").slidingMenu();
            } else {
                $(".menusb").remove();
                $(".main-menu").addClass("nav-holder");
            }
        }
        mobMenuInit();
        //   css ------------------
        var $window = $(window);
        $window.resize(function () {
            csselem();
            mobMenuInit();
        });

        $( document.body ).bind( 'added_to_cart', function( event, fragments, cart_hash ) {
            if( fragments && fragments['div.widget_shopping_cart_content'] ){
                var cart_content = fragments['div.widget_shopping_cart_content'];

                if($(cart_content).find('.mini_cart_item')){
                    var cart_quantity_total = 0;
                    $(cart_content).find('.mini_cart_item').each(function(){
                        cart_quantity_total += parseInt($('span.quantity', this).text());
                    });

                    $('.attr-nav .cart-link .cart-count').text(cart_quantity_total);
                }
            }
        });
      
    }
    //   Parallax ------------------
    function initparallax() {
        var a = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
            }
        };
        var trueMobile = a.any();
        if (null == trueMobile) {
            var b = new Scrollax();
            b.reload();
            b.init();
        }
        if (trueMobile) $(".bgvid , .background-vimeo , .background-youtube-wrapper ").remove();
    }
    
    //   Init All ------------------
    $(function () {
        initCitybook();
        initparallax();

        // A sample code to draw a polygon on main gmap. Available from 1.0.6
        // window.addEventListener('listingsMapInit', function(e){

        //     // console.log(window.listingsMap)

        //     // Define the LatLng coordinates for the polygon's path.
        //     var triangleCoords = [
        //       {lat: 25.774, lng: -80.190},
        //       {lat: 18.466, lng: -66.118},
        //       {lat: 32.321, lng: -64.757},
        //       {lat: 25.774, lng: -80.190}
        //     ];

        //     // Construct the polygon.
        //     var bermudaTriangle = new google.maps.Polygon({
        //       paths: triangleCoords,
        //       strokeColor: '#FF0000',
        //       strokeOpacity: 0.8,
        //       strokeWeight: 2,
        //       fillColor: '#FF0000',
        //       fillOpacity: 0.35
        //     });
        //     bermudaTriangle.setMap(window.listingsMap);


        // });

        // // A sample code to change map style
        // // https://developers.google.com/maps/documentation/javascript/styling#style-example
        // window.addEventListener('listingsMapInit', function(e){
            
        //     window.listingsMap.setOptions({
        //         styles: [{
        //             "featureType": "administrative",
        //             "elementType": "labels.text.fill",
        //             "stylers": [{
        //                 "color": "#444444"
        //             }]
        //         }]
        //     });


        // });

        // // A sample code to modify OpenStreetMap
        // // window.addEventListener('listingsOSMMapInit', function(e){
        // window.addEventListener('listingsOSMMapLoaded', function(e){

            

        //     // var openCycleMapLayer = new ol.layer.Tile({
        //     //     source: new ol.source.OSM({
        //     //       attributions: [
        //     //         'All maps © <a href="https://www.opencyclemap.org/">OpenCycleMap</a>',
        //     //         ol.source.OSM.ATTRIBUTION
        //     //       ],
        //     //       url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' +
        //     //           '?apikey=Your API key from http://www.thunderforest.com/docs/apikeys/ here'
        //     //     })
        //     //   });

        //       var openSeaMapLayer = new ol.layer.Tile({
        //         source: new ol.source.OSM({
        //           attributions: [
        //             'All maps © <a href="http://www.openseamap.org/">OpenSeaMap</a>',
        //             ol.source.OSM.ATTRIBUTION
        //           ],
        //           opaque: false,
        //           url: 'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png'
        //         })
        //     });

        //     // window.listingsOSMMap.addLayer(openCycleMapLayer)
        //     window.listingsOSMMap.addLayer(openSeaMapLayer)

        // });

    });

})(jQuery);



