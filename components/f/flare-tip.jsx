import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qurrdobon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 21.5l1-9.25m3 9.25l-1-9.25M5 21.5h14m-7-19c2 2.5 4 4.25 4 6a4 4 0 0 1-8 0c0-1.75 2-3.5 4-6Z");
}
</style><path class="qurrdobon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flare-tip"} {...others} />);
}

export default Component;
