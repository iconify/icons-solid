import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qv7avab7r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19 19.5L9.25 9.25c-1.5-1.5-1-4.75 1.75-4.75c2.5 0 3.25 3 1.25 4.5L8 12c-2.5 1.75-2.75 3.5-2.25 5C6.4 18.75 8 19.5 10 19.5c3 0 5.5-2 7-6");
}
</style><path class="qv7avab7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ampersand"} {...others} />);
}

export default Component;
