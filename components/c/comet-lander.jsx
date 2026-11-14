import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e5rc6rbvj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11C3.5 7.5 6 5 9 5.5c2.5-1 5.5 1.5 5 4.5c1 3-1.5 6.5-4.5 6c-3 1-6-1.5-6-5Zm12.75-5.5l4.5-2.25m-3.5 6.25l4.25-2.25M15 18.5a3 3 0 0 1 6 0Zm.75 0l-1.5 3m6-3l1.5 3");
}
</style><path class="e5rc6rbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:comet-lander"} {...others} />);
}

export default Component;
