import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w5xnwxb9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 9.5h4.5a5.25 5.25 0 0 1 5.25 5.25A5.25 5.25 0 0 1 14.25 20h-4.5a5.25 5.25 0 0 1-5.25-5.25A5.25 5.25 0 0 1 9.75 9.5m2.25-7l2.25 1V5c0 1.25-1 2-2.25 2.5C10.75 7 9.75 6.25 9.75 5V3.5ZM9 13.75h.01m5.99 0h.01M10 17h4M2.5 13v3m19-3v3");
}
</style><path class="w5xnwxb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:insurance-chatbot"} {...others} />);
}

export default Component;
