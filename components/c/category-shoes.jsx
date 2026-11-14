import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kcmnjkb6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17V8.5q0-1 1-1h3.5L9 10l5 2l4.5 1.5q3 .5 3 3.5Zm-.5 0h19v4.5h-19Zm8-6.5l-.75 2m3.75-.75l-.75 2M16.5 13l-.75 2");
}
</style><path class="kcmnjkb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:category-shoes"} {...others} />);
}

export default Component;
