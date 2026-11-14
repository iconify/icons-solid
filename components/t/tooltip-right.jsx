import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xof26ri3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5H16a2 2 0 0 1 2 2v3l3.5 2.5l-3.5 2.5v3a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2m2 5.5H14m-7.5 4H11");
}
</style><path class="xof26ri3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tooltip-right"} {...others} />);
}

export default Component;
