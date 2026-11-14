import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aavz8ozbw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M8 9l2.75-2.75m5 6.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-2.25 9c0-2.5 2-4 4.5-4s4 1.5 4 4");
}
</style><path class="aavz8ozbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:meter-reader"} {...others} />);
}

export default Component;
