import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mwpitmblm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11h16v2a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6Zm4 8.5L7 21m9-1.5l1 1.5m2-10V6a2 2 0 0 0-4 0");
}
</style><path class="mwpitmblm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:freestanding-bathtub"} {...others} />);
}

export default Component;
