// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name)
{
    drivers.splice(drivers.length, 0, name);
}

function destructivelyPrependDriver(name)
{
    drivers.splice(0, 0, name);
}

function destructivelyRemoveLastDriver(name)
{
    drivers.splice(-1, 1);
}

function destructivelyRemoveFirstDriver(name)
{
    drivers.splice(0, 1);
}

function appendDriver(name)
{
    const newArray = [...drivers, name];
    return newArray;
}

function prependDriver(name)
{
    const newArray = [name, ...drivers];
    return newArray;
}

function removeLastDriver()
{
    const newArray = drivers.slice(0, drivers.length-1);
    return newArray;
}

function removeFirstDriver()
{
    const newArray = drivers.slice(1);
    return newArray;
}

