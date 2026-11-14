import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hfpugv-2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.75h19c0 5.5-4 8.5-9.5 8.5s-9.5-3-9.5-8.5m11.75-6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M15 7l-4.75 4.75");
}
</style><path class="hfpugv-2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:baby-bowl"} {...others} />);
}

export default Component;
