import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.orh9_vlxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12v8c3.5-1 7-.5 9.5 1c2.5-1.5 6-2 9.5-1v-8c-3.5-1-7-.5-9.5 1c-2.5-1.5-6-2-9.5-1Zm9.5 1v8m0-11c-.5-3.5 1-7.25 4.5-7.25c3 0 4.25 3.75 2 5.25c-1.75 1.25-3.75 0-3-1.75");
}
</style><path class="orh9_vlxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:folk-tale-book"} {...others} />);
}

export default Component;
