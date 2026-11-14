import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yw7zlzc7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12v4.25A1.75 1.75 0 0 1 7.25 18H6.227a1.75 1.75 0 0 1-1.591-2.479L6.5 11.454A1.31 1.31 0 0 1 9 12m6 0v4.25A1.75 1.75 0 0 0 16.75 18h1.023a1.75 1.75 0 0 0 1.591-2.479L17.5 11.454A1.31 1.31 0 0 0 15 12m-3-9.5v3M12 9v6m0 3.5v3");
}
</style><path class="yw7zlzc7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:reflect-tool"} {...others} />);
}

export default Component;
