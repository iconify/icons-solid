import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uy9lvy4it {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 6.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M21.5 19.5H14c-3.5 0-5.5-4-6.5-8.5m0 0L5 19.5");
}
</style><path class="uy9lvy4it"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cobra-pose"} {...others} />);
}

export default Component;
