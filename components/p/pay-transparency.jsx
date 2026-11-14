import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xxuwkybvg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 8c2.75-4.75 10.25-4.75 13 0c-2.75 4.75-10.25 4.75-13 0m6.5 0h.01m4.24 8.75a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0m4.25-1v2");
}
</style><path class="xxuwkybvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pay-transparency"} {...others} />);
}

export default Component;
