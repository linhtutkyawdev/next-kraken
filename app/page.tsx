"use client";
export default function Home() {
  function copyCodeToClipboard() {
    const copyText = `cargo install krk
  krk create`;
    const textArea = document.createElement("textarea");
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    const cpyBtn = document.getElementById("copyButton");
    if (!cpyBtn) return;
    cpyBtn.innerHTML = `<path
          opacity="0.4"
          d="M17.0998 2H12.8998C9.44976 2 8.04977 3.37 8.00977 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V15.99C20.6298 15.95 21.9998 14.55 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z"
  
        />
        <path
          d="M11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1V12.9C16 9.4 14.6 8 11.1 8ZM12.29 13.65L8.58 17.36C8.44 17.5 8.26 17.57 8.07 17.57C7.88 17.57 7.7 17.5 7.56 17.36L5.7 15.5C5.42 15.22 5.42 14.77 5.7 14.49C5.98 14.21 6.43 14.21 6.71 14.49L8.06 15.84L11.27 12.63C11.55 12.35 12 12.35 12.28 12.63C12.56 12.91 12.57 13.37 12.29 13.65Z"
  
        />`;

    setTimeout(
      () =>
        (cpyBtn.innerHTML = `<path
          d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
  
        />
        <path
          opacity="0.4"
          d="M17.0998 2H12.8998C9.44976 2 8.04977 3.37 8.00977 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V15.99C20.6298 15.95 21.9998 14.55 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z"
  
        />`),
      2000
    );
  }

  return (
    <>
      <head>
        <title>Kraken</title>
        <meta
          name="description"
          content="Kraken: The game changing tool for rustatians."
        />
        <meta name="keywords" content="kraken krk shuttle helper" />

        {/* <!-- tailwind deez css --> */}
        <link rel="stylesheet" href="/styles/tailwind.css" />
      </head>
      <body>
        <main
          className="leading-normal tracking-normal text-indigo-400 p-6 bg-cover bg-fixed"
          style={{
            backgroundImage:
              "url('https://raw.githubusercontent.com/tailwindtoolbox/Rainblur-Landing-Page/main/header.png')",
          }}
        >
          <div className="h-full">
            {/* <!--Nav--> */}
            <div className="w-full container mx-auto">
              <div className="w-full flex items-center justify-between">
                <a
                  className="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                  href="/"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500">
                    Kraken
                  </span>
                </a>

                <div className="flex w-1/2 justify-end content-center">
                  <a
                    className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                    href="https://www.rust-lang.org"
                  >
                    <svg
                      className="fill-current h-12 m-[-0.75rem]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      preserveAspectRatio="xMidYMid"
                    >
                      <path d="m47.781 31.608-1.343-.832a18.57 18.57 0 0 0-.038-.391l1.154-1.077a.46.46 0 0 0-.153-.771l-1.476-.552a16.798 16.798 0 0 0-.115-.381l.92-1.279a.462.462 0 0 0-.3-.727l-1.557-.253c-.06-.118-.123-.234-.187-.35l.654-1.435a.46.46 0 0 0-.437-.654l-1.579.055a12.482 12.482 0 0 0-.25-.302l.363-1.539a.461.461 0 0 0-.556-.556l-1.538.362c-.1-.084-.2-.167-.303-.25l.055-1.578a.46.46 0 0 0-.654-.437l-1.435.654a16.712 16.712 0 0 0-.35-.188l-.253-1.556a.462.462 0 0 0-.726-.301l-1.28.92a14.31 14.31 0 0 0-.38-.115l-.552-1.476a.461.461 0 0 0-.771-.154l-1.077 1.156c-.13-.014-.26-.028-.391-.038l-.832-1.344a.462.462 0 0 0-.786 0l-.832 1.344c-.13.01-.261.024-.391.038l-1.077-1.155a.464.464 0 0 0-.771.153l-.552 1.476c-.128.037-.255.076-.38.116l-1.28-.921a.46.46 0 0 0-.727.3l-.254 1.557c-.117.061-.233.124-.35.188l-1.434-.654a.46.46 0 0 0-.654.436l.055 1.58c-.102.082-.203.165-.303.25l-1.538-.363a.464.464 0 0 0-.557.556l.363 1.539c-.085.1-.168.2-.25.302l-1.579-.055a.462.462 0 0 0-.437.654l.654 1.436c-.063.115-.126.231-.187.35l-1.556.252a.462.462 0 0 0-.301.727l.92 1.279c-.04.126-.078.253-.115.38l-1.476.553a.462.462 0 0 0-.153.771l1.155 1.077c-.015.13-.028.26-.039.391l-1.343.832a.462.462 0 0 0 0 .786l1.343.831c.011.131.024.262.039.392l-1.155 1.077a.462.462 0 0 0 .153.771l1.476.552c.037.128.076.255.116.38l-.921 1.28a.462.462 0 0 0 .301.726l1.556.253c.061.118.123.235.188.35l-.655 1.435a.462.462 0 0 0 .437.654l1.579-.055c.082.103.165.203.25.303l-.363 1.539a.46.46 0 0 0 .557.555l1.538-.362c.1.085.201.167.303.249l-.055 1.58a.461.461 0 0 0 .654.436l1.435-.654c.115.064.232.127.35.188l.253 1.555a.461.461 0 0 0 .727.302l1.279-.922c.126.04.253.08.38.116l.552 1.476a.46.46 0 0 0 .771.153l1.078-1.155c.13.015.26.028.391.04l.832 1.343a.463.463 0 0 0 .786 0l.831-1.344c.131-.011.262-.024.392-.039l1.077 1.155a.46.46 0 0 0 .77-.153l.553-1.476c.127-.036.254-.076.38-.116l1.28.922a.463.463 0 0 0 .726-.302l.254-1.556c.117-.06.233-.124.349-.187l1.435.654a.461.461 0 0 0 .654-.437l-.055-1.58c.102-.08.203-.163.303-.248l1.538.362a.46.46 0 0 0 .556-.555l-.362-1.539c.084-.1.167-.2.249-.303l1.58.055a.46.46 0 0 0 .436-.654l-.654-1.435c.064-.115.126-.232.187-.35l1.556-.253a.46.46 0 0 0 .301-.726l-.92-1.28a17.5 17.5 0 0 0 .115-.38l1.476-.552a.46.46 0 0 0 .153-.771l-1.155-1.077c.014-.13.027-.261.039-.392l1.343-.831a.462.462 0 0 0 0-.786zM38.79 42.752a.952.952 0 0 1 .399-1.861.952.952 0 0 1-.4 1.861zm-.457-3.087a.866.866 0 0 0-1.028.666l-.477 2.226A11.649 11.649 0 0 1 32 43.597c-1.76 0-3.43-.39-4.929-1.087l-.477-2.225a.866.866 0 0 0-1.028-.667l-1.965.422a11.68 11.68 0 0 1-1.016-1.197h9.561c.108 0 .18-.02.18-.118v-3.382c0-.099-.072-.118-.18-.118H29.35V33.08h3.024c.276 0 1.476.079 1.86 1.613.12.471.384 2.006.564 2.497.18.551.912 1.652 1.692 1.652h4.764a.977.977 0 0 0 .173-.017c-.33.449-.693.874-1.083 1.27l-2.01-.431zm-13.223 3.04a.952.952 0 0 1-.399-1.861.95.95 0 0 1 .398 1.862zm-3.627-14.707a.95.95 0 1 1-1.737.771.95.95 0 1 1 1.737-.771zm-1.115 2.643 2.047-.91a.868.868 0 0 0 .44-1.145l-.421-.953h1.658v7.474h-3.345a11.714 11.714 0 0 1-.38-4.466zm8.983-.726v-2.203h3.948c.204 0 1.44.236 1.44 1.16 0 .767-.948 1.043-1.728 1.043h-3.66zM43.7 31.898c0 .292-.011.581-.033.868h-1.2c-.12 0-.168.08-.168.197v.551c0 1.298-.732 1.58-1.373 1.652-.61.068-1.288-.256-1.371-.63-.36-2.025-.96-2.458-1.908-3.206 1.176-.746 2.4-1.848 2.4-3.323 0-1.593-1.092-2.596-1.836-3.088-1.044-.688-2.2-.826-2.512-.826H23.285a11.684 11.684 0 0 1 6.545-3.694l1.463 1.535c.331.346.88.36 1.225.028l1.638-1.566a11.71 11.71 0 0 1 8.009 5.704l-1.121 2.532a.869.869 0 0 0 .44 1.145l2.159.958c.037.383.056.77.056 1.163zM31.294 19.093a.95.95 0 0 1 1.344.031.952.952 0 0 1-.032 1.346.949.949 0 0 1-1.343-.032.953.953 0 0 1 .031-1.345zm11.123 8.951a.95.95 0 1 1 1.737.772.95.95 0 1 1-1.737-.772z" />
                    </svg>
                  </a>
                  <a
                    className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                    href="https://www.shuttle.rs"
                  >
                    <svg
                      className="fill-current h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.5276 0.927734L14.3516 7.9646L7.17585 7.9646L0 15.0013H7.17585L7.17585 22.0375H0V29.0743H7.17585L7.17585 22.0383H14.3516V29.0751L21.5276 22.0383V15.0013L28.7034 7.9646V0.927734H21.5276Z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* <!--Main--> */}
            <div className="container pt-12 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
              {/* <!--Left Col--> */}
              <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                  Your
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500">
                    Next Website
                  </span>
                  in just two commands!
                </h1>
                <p className="text-white leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                  Create and deploy website with rust-axum, the performent
                  solution!
                </p>

                <code className="text-sm sm:text-base inline-flex justify-between text-left items-center space-x-4 bg-gray-900 opacity-75 w-full shadow-lg mb-4 text-white rounded-lg p-4 pl-6">
                  <div className="flex flex-col">
                    <span className="flex gap-4">
                      <span className="shrink-0 text-gray-500"> $ </span>

                      <span className="flex-1">
                        <span> cargo install </span>

                        <span className="text-yellow-500"> krk </span>
                      </span>
                    </span>
                    <span className="flex gap-4">
                      <span className="shrink-0 text-gray-500"> $ </span>

                      <span className="flex-1">
                        <span> krk </span>

                        <span className="text-yellow-500"> create </span>
                      </span>
                    </span>
                  </div>
                  <svg
                    className="shrink-0 h-5 w-5 transition cursor-pointer fill-gray-500 hover:fill-white pointer-events-auto"
                    onClick={copyCodeToClipboard}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    id="copyButton"
                  >
                    <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
                    <path
                      opacity="0.4"
                      d="M17.0998 2H12.8998C9.44976 2 8.04977 3.37 8.00977 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V15.99C20.6298 15.95 21.9998 14.55 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z"
                    />
                  </svg>
                </code>
              </div>

              {/* <!--Right Col--> */}
              <div className="w-full xl:w-3/5 p-12 overflow-hidden">
                <img
                  className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                  src="https://raw.githubusercontent.com/tailwindtoolbox/Rainblur-Landing-Page/4599fd56c7e7ae187e578fcad5803ae03cc69231/macbook.svg"
                />
              </div>

              {/* <!--Footer--> */}
              <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
                <a
                  className="text-gray-500 no-underline hover:no-underline"
                  href="#"
                >
                  &copy; Kraken 2024
                </a>
                - Created by
                <a
                  className="text-gray-500 no-underline hover:no-underline"
                  href="https://linhtutkyawdev.vercel.app"
                >
                  Lin Htut Kyaw
                </a>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
