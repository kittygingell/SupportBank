
const readline = require('readline-sync');

const testData = [
    { Date: "01/01/2014", From: "Jon A", To: "Sarah T", Narrative: "Pokemon Training", Amount: 7.8 },
    { Date: "04/01/2014", From: "Stephen S", To: "Tim L", Narrative: "Lunch", Amount: 4.37 },
    { Date: "08/01/2014", From: "Laura B", To: "Stephen S", Narrative: "Lunch", Amount: 5.09 },
    { Date: "11/01/2014", From: "Rob S", To: "Ben B", Narrative: "Misc Morale", Amount: 7.8 },
    { Date: "14/01/2014", From: "Stephen S", To: "Ben B", Narrative: "Beers", Amount: 7.36 }
]

// Jon A
// 01/01/2014 - Pokemon Training

console.log('\nEnter command, either List all or List account:');
var instruction = readline.prompt();



if (instruction == 'List all') {
    //List all code
    let team = new Map()

    testData.forEach(a => {
        if (team.has(a.From)) {
            team.set(a.From, parseInt(team.get(a.From)) + a.Amount)
        }
        else {
            team.set(a.From, a.Amount)
        }

        if (team.has(a.To)) {
            team.set(a.To, parseInt(team.get(a.To)) - a.Amount)
        }
        else {
            team.set(a.To, - a.Amount)
        }
    })

    console.log(team)
}


else if (instruction == 'List account') {
    console.log('\nEnter account name:');
    var owner = readline.prompt();
    

    testData.forEach(a => {
        if (a.From == owner || a.To == owner) {
            console.log(a.Date, "-", a.Narrative)

        }
        
    })


}







else {
    console.log('\nInstruction was not List all or List Account')
}

