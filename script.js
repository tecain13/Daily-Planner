var currenthour;
var time;
var headerdate = document.getElementById("todaydate").append(new Date());


$(document).ready(function () {

    //enable the save button functionality

    $(".saveBtn").on("click", function () {
        //recognizing the html element hierarchy
        var value = $(this).siblings(".description").val();

        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    })

    //set local storage for each timeblock
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));

    $("#hour-10 .description").val(localStorage.getItem("hour-10"));

    $("#hour-11 .description").val(localStorage.getItem("hour-11"));

    $("#hour-12 .description").val(localStorage.getItem("hour-12"));

    $("#hour-13 .description").val(localStorage.getItem("hour-13"));

    $("#hour-14 .description").val(localStorage.getItem("hour-14"));

    $("#hour-15 .description").val(localStorage.getItem("hour-15"));

    $("#hour-16 .description").val(localStorage.getItem("hour-16"));

    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    //update classes dependent upon hour
    function updatehour() {
        var currenthour = moment().hours()
        $(".time-block").each(function () {
            //splitting the hour-11 id with the "-"
            //as the delimiter, and focusing on the
            //number (hour) based on its position 
            //after transforming it into an array
            var blockhour = parseInt($(this).attr("id").split("-")[1]);
            if (blockhour < currenthour) {
                //turn it grey
                $(this).addClass("past")
            } else if (blockhour === currenthour) {
                //remove the grey and apply red
                $(this).removeClass("past")
                $(this).addClass("present")
            } else {
                //remove the grey and red, apply the green
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })

    }

    //call the ultimate function
    updatehour();


});



