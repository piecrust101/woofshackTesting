$(document).ready(function() { 

    //------------- modal gallery -------------------//
    
    /* activate the carousel */
    $("#gallery-carousel").carousel({ interval: false });
    
    /* change modal title when slide changes */
    $("#gallery-carousel").on("slid.bs.carousel", function () {
	var active = $(this).find('.carousel-inner').find('.active').find('img').attr('title');
	$(".modal-title").html(active);
    });
   
    /* when clicking a thumbnail */
    $(".row .thumbnail").on('click', function(){
	var title = $(".modal-title");
	title.empty();
	
	var id = parseInt (this.id, 10);

	var thisTitle = $(this).parent().attr('title');
	title.html(thisTitle);
	$("#gallery-carousel").carousel( id );

	// show the modal
	$("#modal-gallery").modal("show");
	$('#c-item'+id).addClass('active');
    });

    //------------- shadow on hover -------------------//

    //$( ".card" ).hover(
//	function() {
//	    $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
//	},
//	function() {
//	    $(this).removeClass('shadow-lg');
//	}
  //  );

    //------------- smooth scroll to internal links -------------------//

    //  $("a[href*=#]").click(function(event){     
    //	  event.preventDefault();
    //	  $('html.body').animate({scrollTop:$(this.hash).offset().top}, 500);
    //  });

    // document ready  
});


window.onload = function() {
    // executes when complete page is fully loaded, including all frames, objects and images
    // console.log("window is loaded");
    // window load  
};
