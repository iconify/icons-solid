import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vgepvgb3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4v5a5 5 0 0 0 10 0V4l-2.5 2.5L12 4L9.5 6.5Zm5 10v7.5m0-2.5c0-2.5 2.5-4 5.5-4c0 2.5-2.5 4-5.5 4");
}
</style><path class="vgepvgb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pin-florist"} {...others} />);
}

export default Component;
