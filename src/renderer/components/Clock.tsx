import React from "react"
import { Box } from "@material-ui/core";
import { dateTime } from "@src/renderer/store";
import { Subscription } from "rxjs";

function Clock() {
    const [date, setDate] = React.useState<Date>(new Date())

    React.useEffect(
        () => {
            const subscription = dateTime.subscribe((date) => setDate(date))
            return () => subscription.unsubscribe()
        },
    )
    return (
        <Box>
            {date.toString()}
        </Box>
    )
}

export { Clock }
