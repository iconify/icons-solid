import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ggsy6j64k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 2v5.5M8 21l4-6.5l4 6.5m-.641-17.359a4.75 4.75 0 0 1 0 6.718m-6.718 0a4.75 4.75 0 0 1 0-6.718M18.928 3a8 8 0 0 1 0 8M5.072 11a8 8 0 0 1 0-8");
}
</style><path class="ggsy6j64k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:antenna-transmit"} {...others} />);
}

export default Component;
