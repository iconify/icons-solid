import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qnw4nccja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h3l3 1.5l-3 1.5h-3zm0 5.25h7l3 1.5l-3 1.5h-7zm0 5.25h11l3 1.5l-3 1.5h-11zm0 5.25h15l3 1.5l-3 1.5h-15z");
}
</style><path class="qnw4nccja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:energy-rating"} {...others} />);
}

export default Component;
