import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x0ebuhbxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.045 14.5h3.91a1.75 1.75 0 0 1 1.541.92l1.615 3A1.75 1.75 0 0 1 15.57 21H8.43a1.75 1.75 0 0 1-1.541-2.58l1.615-3a1.75 1.75 0 0 1 1.541-.92M7 3l5 3.5L17 3M7 7.25l5 3.5l5-3.5");
}
</style><path class="x0ebuhbxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:g-force"} {...others} />);
}

export default Component;
