import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qkcqbg78e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h18M6.25 9h1A2.75 2.75 0 0 1 10 11.75a2.75 2.75 0 0 1-2.75 2.75h-1a2.75 2.75 0 0 1-2.75-2.75A2.75 2.75 0 0 1 6.25 9m10.5 0h1a2.75 2.75 0 0 1 2.75 2.75a2.75 2.75 0 0 1-2.75 2.75h-1A2.75 2.75 0 0 1 14 11.75A2.75 2.75 0 0 1 16.75 9M10 11h4");
}
</style><path class="qkcqbg78e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sunglasses"} {...others} />);
}

export default Component;
