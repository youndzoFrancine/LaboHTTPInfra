$(function() {
    console.log("loading students");
    function loadStudents(){
    $.getJSON("/api/students/", function(students){
        console.log(students);
        var messsage="Nobody is here";
        if(students.length>0){
            message =students[0].firstName + " " + students[0].lastName;
        }
        $(".skills").text(message);

    });
    };
    loadStudents();
    setInterval(loadStudents, 2000);
    });
