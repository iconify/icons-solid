import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.niso9bcsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c2 2.5 4 5 4 8.5a4 4 0 0 1-8 0c0-2 1-3.5 2-4.5q0 2.25 1.5 3c-.5-2.5-.5-5 .5-7M7.25 18h9.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 7.25 18M3 21.5h18");
}
</style><path class="niso9bcsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fuel-energy-density"} {...others} />);
}

export default Component;
