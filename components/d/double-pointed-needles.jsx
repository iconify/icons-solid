import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w-vkyebuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 17.5l6-6m3-3l6-6m-13 17l6-6m3-3l6-6m-13 17l6-6m3-3l6-6M6.52 9.702L9.702 6.52l7.778 7.778l-3.182 3.182Z");
}
</style><path class="w-vkyebuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:double-pointed-needles"} {...others} />);
}

export default Component;
