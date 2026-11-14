import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ro72bob6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12v-1.5L12 3.25l8.5 7.25V12m-18 3.75q2.25-2 4.75 0q2.25 2 4.75 0q2.25-2 4.75 0q2.25 2 4.75 0m-19 4.5q2.25-2 4.75 0q2.25 2 4.75 0q2.25-2 4.75 0q2.25 2 4.75 0");
}
</style><path class="ro72bob6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flood-house-water"} {...others} />);
}

export default Component;
