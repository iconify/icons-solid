import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u4505acyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3h6a2 2 0 0 1 2 2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6.5 9.75h11a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-2 6.75h15a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2a2 2 0 0 1 2-2");
}
</style><path class="u4505acyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tech-stack"} {...others} />);
}

export default Component;
