import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/api",  // api url
    withCredentials: true
})

export default instance