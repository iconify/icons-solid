import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v1tlpdbnf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4s-3.5 5-3.5 8a3.5 3.5 0 0 0 7 0C10.5 9 7 4 7 4m10 2s-3.5 5-3.5 8a3.5 3.5 0 0 0 7 0c0-3-3.5-8-3.5-8M5 21h14");
}
</style><path class="v1tlpdbnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rainfall-moderate"} {...others} />);
}

export default Component;
