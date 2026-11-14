import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i7ap5fbua {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 21v-8.5L5 9c-.5-1 .5-2 1.5-1.5l2 2.5V4.5c0-1 1.5-1 1.5 0V9V3.5c0-1 1.75-1 1.75 0V9V4c0-1 1.75-1 1.75 0v5.5V6c0-1 1.75-1 1.75 0v8c0 2.5-1.25 3.5-1.25 5v2Z");
}
</style><path class="i7ap5fbua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hand-form"} {...others} />);
}

export default Component;
