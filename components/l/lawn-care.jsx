import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jv-xq1b1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16v-2a3 3 0 0 1 3-3h8l3 5Zm12-5l5.25-8m-1.75-.5l3.25 1.75M4 18.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m9 .5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="jv-xq1b1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lawn-care"} {...others} />);
}

export default Component;
