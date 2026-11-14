import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lsyif-jng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 4h-7a4.5 4.5 0 0 0-4.5 4.5v7A4.5 4.5 0 0 0 10 20h7m0-17.5V13m-2 0h4M15 2.5h4M15 20h4");
}
</style><path class="lsyif-jng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:c-clamp"} {...others} />);
}

export default Component;
