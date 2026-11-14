import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e4648ubtx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 13v3a5.5 5.5 0 0 0 11 0V7m-18 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m10.75 0V3.5m3.5 9.5V4.25");
}
</style><path class="e4648ubtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:air-pinch"} {...others} />);
}

export default Component;
