async function getData() {
    const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': ''
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}

export default async function Page() {
//  const data = await getData();
//    var x = data[0].id
//  return <main>{x}</main>;
    return <h1>HI!!!</h1>
}