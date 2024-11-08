interface otpEmailProps {
    email: string;
    code: number;
}

export const otpEmail = ({ email = "yourmail@email.com", code = 123456 }) => {
    const codeString = code.toString();
    const codeDigits = codeString.split("");

    return `
    <table
            width="500px"
            style="
                font-family: Arial, Helvetica, sans-serif;
                text-align: center;
                padding: 20px;
                margin-left: auto;
                margin-right: auto;
            "
        >
            <tr>
                <td align="center">
                    <a
                        href="https://employee-leave-management.onrender.com/"
                        style="
                            text-decoration: none;
                            color: white;
                            font-family: serif;
                        "
                    >
                        <table
                            width="100%"
                            style="
                                background-color: rgb(59, 130, 246);
                                padding: 10px;
                            "
                        >
                            <tr style="text-align: center">
                                <td>
                                    <h2
                                        style="
                                            font-size: 1.5rem;
                                            margin: 0;
                                            color: white;
                                        "
                                    >
                                        LEAVE
                                    </h2>
                                </td>
                            </tr>
                        </table>
                    </a>
                </td>
            </tr>
        <tr>
            <td style="padding-top: 20px">
                <h1>Let's log you in</h1>
                <p>
                    Use this code to sign up to Employee Leave Management
                    App. <br />This code will expire in 20 minutes.
                </p>
            </td>
        </tr>
        <tr>
            <td style="padding-top: 30px; padding-bottom: 30px; border: 1px solid rgba(128, 128, 128, 0.445); background-color: rgba(243, 243, 243, 0.712)">
                <table
                    align="center"
                    style="font-size: 36px; font-weight: 700"
                >
                    <tr>
                        ${codeDigits
                            .map(
                                (digit) =>
                                    `<td style="padding: 0 15px">${digit}</td>`
                            )
                            .join("")}
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding-top: 20px">
                <span>This code will securely log you in using </span>
                <br /><a
                    href="mailto:${email}"
                    style="text-decoration: none; color: rgb(59, 130, 246)"
                >${email}</a>
                <p
                    style="
                        margin-top: 30px;
                        color: rgb(107, 114, 128);
                        font-size: 14px;
                    "
                >
                    If you didn't request this email, you can safely ignore
                    it.
                </p>
            </td>
        </tr>
        <tr>
                <td
                    style="
                        padding-top: 20px;
                        border-top: 1px solid #e5e7eb;
                        margin-top: 20px;
                        padding-bottom: 20px;
                        color: rgb(107, 114, 128);
                        font-size: 14px;
                    "
                >
                    <p>&copy; ${new Date().getFullYear()} Leave</p>
                    <div
                        style="
                            display: flex;
                            justify-content: center;
                            gap: 10px;
                            margin-top: 10px;
                        "
                    >
                        <a
                            href="https://employee-leave-management.onrender.com/about"
                            style="
                                color: rgb(59, 130, 246);
                                text-decoration: none;
                            "
                            >About</a
                        >
                        <a
                            href="https://employee-leave-management.onrender.com/support"
                            style="
                                color: rgb(59, 130, 246);
                                text-decoration: none;
                            "
                            >Support</a
                        >
                        <a
                            href="https://employee-leave-management.onrender.com/contact"
                            style="
                                color: rgb(59, 130, 246);
                                text-decoration: none;
                            "
                            >Contact Us</a
                        >
                    </div>
                </td>
            </tr>
    </table>
    `;
};
