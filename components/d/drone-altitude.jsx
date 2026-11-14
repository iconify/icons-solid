import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uzqarabhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h6m7 0h6m-16 0v4.5h13V5m-8 4.5h3A2.5 2.5 0 0 1 16 12a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 8 12a2.5 2.5 0 0 1 2.5-2.5M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="uzqarabhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:drone-altitude"} {...others} />);
}

export default Component;
