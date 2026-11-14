import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipbdmwtef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 2V9M7 9h10a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 17 14H7a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 7 9M2.5 21h19M5 21l2.25-4l2.25 4l2.25-4L14 21l2.25-4l2.25 4");
}
</style><path class="ipbdmwtef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:block-print-stamp"} {...others} />);
}

export default Component;
