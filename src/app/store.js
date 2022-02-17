import React from "react";
import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/car/carSlice";


export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
