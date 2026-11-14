import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qpxk42biu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.6 20.5H3v-16h17v7.2M7.5 2.5v3.75m8-3.75v3.75M3 9.25h17M7.5 13h.01m3.99 0h.01m3.99 0h.01M7.5 17h.01m3.99 0h.01m7.74-2.5a2.25 2.25 0 1 0 2.25 2.25m-3.75 1.5L15 21");
}
</style><path class="qpxk42biu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:maintenance-schedule"} {...others} />);
}

export default Component;
