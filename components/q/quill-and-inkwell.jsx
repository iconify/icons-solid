import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a36mdx5dw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5V17a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4.5Zm5-6.5c-1-4 2.5-9 9.5-11.5c-.5 5.5-4 9.5-8.5 10M10 15L6.5 8.5");
}
</style><path class="a36mdx5dw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:quill-and-inkwell"} {...others} />);
}

export default Component;
