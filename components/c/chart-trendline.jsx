import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wxsnzauyn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11L7 5.5l4.5 4L16 4l5.5 3.5M3 21l1.75-1M7 18.75l1.75-1M11 16.5l1.75-1M15 14.25l1.75-1m1.5-.75l1.75-1m-2.5-.25l2.5.25l-1 2.25");
}
</style><path class="wxsnzauyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-trendline"} {...others} />);
}

export default Component;
