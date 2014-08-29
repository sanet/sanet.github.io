$(document).ready(function(){
	
	/* Tags */
	$(".tag_open").live("click", function() {
	    $(".tag_popup").hide();
	    $(this).parent().find(".tag_popup").show();
	});
	$(".close").live("click", function() {
	    $(this).parent().parent().hide();
	});
	$(".tag_action").live("click", function() {
	    var form = $(this).parent();
	    var tag_block = form.closest("div[class^='tags']");
	    form.children("#id_action").val($(this).attr("id"));
	
	    $.post(form.attr("action"), form.serialize(), function(data){
	        tag_block.replaceWith(data);
	    });
	});
	
	$('input[name="tag"]').live("keydown", function(event){
	    if(event.which == 13){
	        event.preventDefault();
	        var form = $(this).parent();
	        var tag_block = form.closest("div[class^='tags']");
	        form.children("#id_action").val("save");
	
	        $.post(form.attr("action"), form.serialize(), function(data){
	            tag_block.replaceWith(data);
	        });
	    }
	});
	
	//Tag Popup
	$(".bulk_tag_open").click(function() {
	    $(this).parent().find(".bulk_tag_popup").show();
	});
	$(".bulk_tag_action").click(function() {
	    $("form#frmBulkTag #id_selected").val(get_bulk_ids());
	    $("form#frmBulkTag #id_action").val($(this).attr("id"));
	    $("form#frmBulkTag").submit();
	    $(this).parent().parent().hide();
	});
	
	//Nav
	$('.nav li').hover(
		function () {
			$(this).addClass('open_drop');
			$(this).find('ul:first').show();
		},
		function () {
			$(this).removeClass('open_drop');
			$(this).find('ul:first').hide();
		}
	);

	//Top Nav
	$('.actions li').hover(
		function () {
			$(this).find('ul:first').show();
		},
		function () {
			$(this).find('ul:first').hide();
		}
	);

	//Mobi
	$(".mobi_handle").click(function() {
	    $('#header .actions').toggle();
	    $('#nav').toggle();
	});

	//Form Validation
	$('#frmLogin').validate();
	$('#frmPasswordReset').validate();
	$('#frmChannelPartnershipRequest, #frmProductEvaluationRequest').validate({
		rules: {
	        password2: { 
	            equalTo: "#id_password1"
	        }
		}
	});
	
	//Chozen
	$(".chzn_select").chosen();
	
	//Toggle Filter
    $('.toggle-filter').click(function(){
        $(this).parent().find('.filter').toggle();
    });

    
});