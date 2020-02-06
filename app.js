//Question 3 url https://github.com/nhadley1/Hadley_FirstTest.git
// Question #1
let students = [
    {id: 1, name: "John", major: "CS"},
    {id: 2, name: "Mike", major: "Math"},
    {id: 3, name: "Sally", major: "Pharmacy"}
]

students.push({id: 4, name: "Sarah", major: "Business"});

displayStudents = () => {
    students.forEach((item) => {
        console.log(item.id, item.name, item.major)
    })
};

displayStudents();

//Question #2
const boys = [
    {id: 1, hobby:'baseball'},
    {id: 2, hobby:'soccer'},
    {id:3, hobby:'running'}
];
const girls = [
    {id: 1, sport:'soccer'},
    {id: 2, sport:'running'},
    {id:3, sport:'soccer'}
];

compare = () => {
    boys.forEach((item) =>
    {
        girls.forEach((index) =>
        {
            if(index.sport == item.hobby)
            {
                document.getElementById("q2b").innerHTML += "<li>" + "For Sport " + index.sport + " both boy " + item.id + " and girl " + index.id + " like." + "</li>"
            }
        })
    })
}

compare();
