function findMatching(drivers, searchString) {
    const lowercaseSearchString = searchString.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowercaseSearchString);
}

function fuzzyMatch(drivers, query) {
    const matchingDrivers = [];

    for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].startsWith(query)) {
            matchingDrivers.push(drivers[i]);
        }
    }    
    return matchingDrivers;
}

function matchName(drivers, searchString) {
    const matchingDrivers = [];

    drivers.forEach(driver => {
        if (driver.name === searchString) {
            matchingDrivers.push(driver);
        }
    });

    return matchingDrivers;
}