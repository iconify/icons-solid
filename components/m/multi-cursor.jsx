import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w0y5dubbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5c1.25 0 2 .5 2 1.75v7.5c0 1.25-.75 1.75-2 1.75m4-11c-1.25 0-2 .5-2 1.75m2 9.25c-1.25 0-2-.5-2-1.75m5-1.25c1.25 0 2 .5 2 1.75v7.5c0 1.25-.75 1.75-2 1.75m4-11c-1.25 0-2 .5-2 1.75m2 9.25c-1.25 0-2-.5-2-1.75");
}
</style><path class="w0y5dubbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:multi-cursor"} {...others} />);
}

export default Component;
