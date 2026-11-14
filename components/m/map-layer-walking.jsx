import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uzmr3ssei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0M13 9.5l-1.5 5m0 0l3 3l.5 4m-3.5-7l-3.5 7m0-9l2.25-2.5L13 9.5l2.75 3.25");
}
</style><path class="uzmr3ssei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:map-layer-walking"} {...others} />);
}

export default Component;
