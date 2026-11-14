import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nxa16qfej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5L9 17v3.5h4a1.5 1.5 0 0 0 0-3L9 17m6.5-3.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M18 16v4.5");
}
</style><path class="nxa16qfej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:driving-range"} {...others} />);
}

export default Component;
