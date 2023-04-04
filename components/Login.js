"use client";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/15032293/pexels-photo-15032293.png?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt=""
        className="w-full h-80"
      />
      <div className="flex items-center justify-center pt-12">
        <button
          onClick={() => signIn("google")}
          className="text-center bg-[#133337] text-white py-4 px-24 rounded-md"
        >
          Sign With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
