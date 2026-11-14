import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yaj0sobsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.782 5.282h4.072a.621.621 0 0 1 .439 1.061a1.5 1.5 0 0 0 0 2.121l4.243 4.243a1.5 1.5 0 0 0 2.121 0a.621.621 0 0 1 1.061.439v4.072a1.5 1.5 0 0 1-1.5 1.5h-4.072a.621.621 0 0 1-.439-1.061a1.5 1.5 0 0 0 0-2.121l-4.243-4.243a1.5 1.5 0 0 0-2.121 0a.621.621 0 0 1-1.061-.439V6.782a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="yaj0sobsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cursor-resize-diagonal"} {...others} />);
}

export default Component;
