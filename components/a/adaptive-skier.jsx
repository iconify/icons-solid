import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k5bhakbuf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 5.25l1 5h6M9 12h7.5M3 19.5h15q3 0 3.5-3M12 15.25v4.25M15 8l4 11.5");
}
</style><path class="k5bhakbuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:adaptive-skier"} {...others} />);
}

export default Component;
