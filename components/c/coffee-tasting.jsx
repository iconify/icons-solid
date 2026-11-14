import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ca3d-01rm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11.75h18q-.5 7.75-9 7.75t-9-7.75M2.5 7h11m0 0a3.5 2 0 1 0 7 0a3.5 2 0 1 0-7 0");
}
</style><path class="ca3d-01rm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:coffee-tasting"} {...others} />);
}

export default Component;
