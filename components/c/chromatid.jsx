import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w9gclbbnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3q5 4 5 9t-5 9q-2 .5-3-1.5Q8.5 16 8.5 12T4 4.5q1-2 3-1.5m10 0q-5 4-5 9t5 9q2 .5 3-1.5q-4.5-3.5-4.5-7.5T20 4.5q-1-2-3-1.5");
}
</style><path class="w9gclbbnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chromatid"} {...others} />);
}

export default Component;
