import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rt_on9c0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.356 4.356l4.288 4.288a2.625 2.625 0 0 1 0 3.712l-4.288 4.288a2.625 2.625 0 0 1-3.712 0l-4.288-4.288a2.625 2.625 0 0 1 0-3.712l4.288-4.288a2.625 2.625 0 0 1 3.712 0M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="rt_on9c0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:component-publish"} {...others} />);
}

export default Component;
