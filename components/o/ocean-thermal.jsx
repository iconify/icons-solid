import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cjvabsbat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 15V4.5a1.5 1.5 0 0 1 3 0V15a3 3 0 1 1-3 0m-8-3q1-2 2 0t2 0m11 0q1-2 2 0t2 0m-19 5q1-2 2 0t2 0m11 0q1-2 2 0t2 0");
}
</style><path class="cjvabsbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ocean-thermal"} {...others} />);
}

export default Component;
