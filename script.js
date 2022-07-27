// знак + превращает строку в число, '' в конце означает значение по умолчанию
const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

//создаём объект, в кот. в т.ч. есть объекты и массивы
const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
private: false
};

const answ1 = prompt('Последний просмотренный фильм?', ''),
      answ2 = prompt('Какую оценку ему поставите?', ''),
      answ3 = prompt('Последний просмотренный фильм?', ''),
      answ4 = prompt('Какую оценку ему поставите?', '');

//personalMovieDB.movies.answ1 = answ2
//с помощью [] мы делаем код более безопасным, если например будет введена кириллица,
//то через точку может не работать присваивание
personalMovieDB.movies[answ1] = answ2;
personalMovieDB.movies[answ3] = answ4;

console.log(personalMovieDB);
