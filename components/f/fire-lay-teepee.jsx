import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a31yg0b2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21L13.75 3M21 21L10.25 3M12 2.5v7m0 3.5c2.5 2.5 3 4 3 5a3 3 0 0 1-6 0c0-1 .5-2.5 3-5");
}
</style><path class="a31yg0b2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fire-lay-teepee"} {...others} />);
}

export default Component;
