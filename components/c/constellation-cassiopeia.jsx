import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t2vhvob9z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.25 10.5l2.25 3m1.5 0l2.25-3m1.5 0l2.25 3m1.5 0l2.25-3m-15.5-1a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3.75 5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3.75-5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3.75 5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3.75-5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><path class="t2vhvob9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:constellation-cassiopeia"} {...others} />);
}

export default Component;
