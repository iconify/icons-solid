import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kdanyu-ee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 3.5l2 2.25L7 3l2 2.75l2-2.25V8a4 4 0 0 1-8 0ZM7 12v9m0-2.5q4 0 5-4q-4 0-5 4ZM17.75 8C17 4 14 3 14 5.5c0 1.75 1.5 2.5 3 2.75c-2 .75-2 3.25-.25 3.25c1 0 1-1.5 1-3.5Zm0 0c.75-4 3.75-5 3.75-2.5c0 1.75-1.5 2.5-3 2.75c2 .75 2 3.25.25 3.25c-1 0-1-1.5-1-3.5Zm0-2v6");
}
</style><path class="kdanyu-ee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pollinator-garden"} {...others} />);
}

export default Component;
