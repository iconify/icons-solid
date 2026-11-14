import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qybqlcimn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21m-13 0V15m4.5 5.5v-8m4.5 8V10.25m1.5-8Q19 4.5 21.25 5Q19 5.5 18.5 7.75Q18 5.5 15.75 5Q18 4.5 18.5 2.25");
}
</style><path class="qybqlcimn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ai-chart"} {...others} />);
}

export default Component;
