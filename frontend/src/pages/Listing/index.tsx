import Pagination from "componentes/Pagination";
import MovieCard from "componentes/MovieCard";
import { BASE_URL } from "utils/requests";
import axios from "axios";

function Listing() {


// FORMA ERADA
    axios.get(`${BASE_URL}/movies?size-12$page=0`).them(response => {
    console.log(response.data);
        });

    return (
        <>
            <Pagination />
            <div className="contain">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Listing;