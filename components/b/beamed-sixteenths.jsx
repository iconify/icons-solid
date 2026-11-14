import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_o3ksb1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 18.5a3 2.25 0 1 0 6 0a3 2.25 0 1 0-6 0m10 0a3 2.25 0 1 0 6 0a3 2.25 0 1 0-6 0m-4 0V4m10 14.5V4M10 4h10M10 7.5h10");
}
</style><path class="a_o3ksb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:beamed-sixteenths"} {...others} />);
}

export default Component;
