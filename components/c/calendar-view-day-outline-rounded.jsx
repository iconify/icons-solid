import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yrb1gsbur {
  fill: currentColor;
  d: path("M5 17q-.825 0-1.412-.587T3 15V9q0-.825.588-1.412T5 7h14q.825 0 1.413.588T21 9v6q0 .825-.587 1.413T19 17zm0-2h14V9H5zM3.975 5q-.425 0-.7-.288T3 4t.288-.712T4 3h16.025q.425 0 .7.288T21 4t-.288.713T20 5zm0 16q-.425 0-.7-.288T3 20t.288-.712T4 19h16.025q.425 0 .7.288T21 20t-.288.713T20 21zM5 9v6z");
}
</style><path class="yrb1gsbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:calendar-view-day-outline-rounded"} {...others} />);
}

export default Component;
