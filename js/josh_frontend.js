
//Back to top code
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');
});
$(document).ready(function() {
        $(".dropdown").hover(
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("fast");
                $(this).toggleClass('open');
            },
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("fast");
                $(this).toggleClass('open');
            }
        );
		
		$('#vinsubmit').click(function() {
			var $vin = $('#vin').val();

			$.ajax({
			   url: 'https://api.edmunds.com/api/vehicle/v2/vins/'+$vin,
			   data: {
				  fmt: 'json',
				   api_key: 'jn9v2y4n3795seaexnyctghb'
			   },
			   error: function() {
	//		      $('#info').html('<p>An error has occurred</p>');
					alert('error calling Edmunds');
			   },
			   dataType: 'json',
			   success: function(data) {
			      var $make = $('<li>').text(data.make.name);
				  var $model = $('<li>').text(data.model.name);
				  var $year = $('<li>').text(data.years[0].year);
			      $('#carInfo')
			         .append($make)
			         .append($model)
				  	 .append($year);
					console.log(data);
			   },
			   type: 'GET'
			});
		});		
    });	