$(document).ready(function() {
    $.get("https://looney-toons-api.herokuapp.com/api/characters", function(res) {
        console.log(res.data)
        var html_str = "";
        for(var i = 0; i < res.data.length; i++) {
            html_str += "<div class='tunes'>";
            html_str += "<h3>" + res.data[i].name + "</h3>";
            html_str += "<img src='" + res.data[i].img +"' alt='" + res.data[i].name + "' />"
            html_str += "</div>";
        }
        $(".main").html(html_str);
    }, "json");
})