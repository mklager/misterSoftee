$(document).ready(function() {
	$("nav ul li ul li").mouseover(function() {
		$(this).append("<img id=\"triangle\" class=\"active\" src=\"images/triangle.png\"/>");
	}).mouseout(function() {
		$("#triangle").remove();
	});
});
