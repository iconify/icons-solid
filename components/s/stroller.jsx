import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p_b0mjb8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h13a6.5 6.5 0 0 1-13 0m6.5 0V4.5A6.5 6.5 0 0 0 3.5 11m13 0l1.25-5h2.75M5 20a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m7.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><path class="p_b0mjb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:stroller"} {...others} />);
}

export default Component;
