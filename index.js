// Code your solution in this file!
// function actionApplyer(start, fns) {
//     for (let i = 0; i < fns.length; i++) {
//         start = fns[i](start);
//     }
//     return start;
// }

const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0, 2);
}

const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()];

//selectingDrivers.forEach(function())