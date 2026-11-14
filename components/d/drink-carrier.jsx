import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h2sgudbgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h19V17a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Zm.5 0l-.5-7H7l-.5 7m3.75 0l-.5-7h4.5l-.5 7m3.75 0l-.5-7h4.5l-.5 7M9 15.75h6");
}
</style><path class="h2sgudbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:drink-carrier"} {...others} />);
}

export default Component;
