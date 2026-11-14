import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w9eo-mb3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 4.5h7m-3.5 0v17m-3.5-9h7l-1.5 4h-4Zm1 9h5M2.5 16a3.5 1.75 0 1 0 7 0a3.5 1.75 0 1 0-7 0m1-4.5c1-5 5-6.5 8.5-4.75");
}
</style><path class="w9eo-mb3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:disc-golf"} {...others} />);
}

export default Component;
