import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rrjumob-o {
  fill: currentColor;
  d: path("M13.55 5q-.275.45-.413.963T13 7q0 1.65 1.175 2.825T17 11q.525 0 1.038-.137T19 10.45V5zM3 21V3h18v18z");
}
</style><path class="rrjumob-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ripples-sharp"} {...others} />);
}

export default Component;
