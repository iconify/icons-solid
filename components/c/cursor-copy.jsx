import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xnxlh-bjn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.158 4.996l4.926 2.016A.923.923 0 0 1 12 8.75l-1.692.507a1.75 1.75 0 0 0-1.121 1.027L8.5 12a1.028 1.028 0 0 1-1.92-.03L4.851 7.214a1.75 1.75 0 0 1 2.307-2.218M18 15v6m-3-3h6");
}
</style><path class="xnxlh-bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cursor-copy"} {...others} />);
}

export default Component;
