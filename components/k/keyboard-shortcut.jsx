import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.axwy52_vr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.6 15.5H2.5V4h17v8.6M6 7.75h.01m3.74 0h.01m3.74 0h.01M7 11.5h7.5m0 7h7m-3-3l3 3l-3 3");
}
</style><path class="axwy52_vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:keyboard-shortcut"} {...others} />);
}

export default Component;
