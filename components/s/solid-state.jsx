import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bgfveg5si {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-14 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-14 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="bgfveg5si"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:solid-state"} {...others} />);
}

export default Component;
