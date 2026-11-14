import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tf328g7_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5a6.75 6.75 0 0 0 9.5 9.5ZM6 13l-3 4.5m7.75-9.25L15 4M3 14.5V21m12.986-3.946l1.5-1.375a1.5 1.5 0 0 1 2.028 0l1.5 1.375a1.5 1.5 0 0 1 .486 1.106V20a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-1.84a1.5 1.5 0 0 1 .486-1.106");
}
</style><path class="tf328g7_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:satellite-dish-wall"} {...others} />);
}

export default Component;
