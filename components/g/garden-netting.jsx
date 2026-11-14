import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bw7onkblr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3v18M21 3v18M3 4.5h18M3 15q9 6 18 0M3 4.5l13 13m-7-13l11 11m-5-11l6 6m-18 0l7.5 7.5M21 4.5l-13 13m7-13l-11 11m5-11l-6 6m18 0L13.5 18");
}
</style><path class="bw7onkblr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:garden-netting"} {...others} />);
}

export default Component;
