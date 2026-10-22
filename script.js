
function calculate() {
    let name = document.getElementById("name").value;
    let a = Number(document.getElementById("m1").value);
    let b = Number(document.getElementById("m2").value);
    let c = Number(document.getElementById("m3").value);

    let percentage = (a + b + c) / 3;
    let grade;

    if (percentage >= 80)
        grade = "A";
    else if (percentage >= 60)
        grade = "B";
    else if (percentage >= 40)
        grade = "C";
    else
        grade = "Fail";

    document.getElementById("result").innerHTML =
        "Name: " + name + "<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Grade: " + grade;
}
