import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yj_d42y4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21c0-6-1-12 .5-17M10 21c-.5-5-4-9-7-11m7 11c.5-5 3-9 6-11m2-5.5h.01m2.49 5h.01M19.5 15h.01");
}
</style><path class="yj_d42y4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:grass-seed-scatter"} {...others} />);
}

export default Component;
