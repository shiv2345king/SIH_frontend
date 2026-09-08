const USE_MOCK_API = false;

const BASE_URL =
    import.meta.env.VITE_API_URL ||
    "https://sih-backend-0ps3.onrender.com/api/v1";

const delay = (ms = 800) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

export {
    USE_MOCK_API,
    BASE_URL,
    delay,
};