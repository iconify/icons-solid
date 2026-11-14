import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iz8fzlbmh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.229 4.255l.619.885a1.5 1.5 0 0 1-1.229 2.36h-1.238a1.5 1.5 0 0 1-1.229-2.36l.619-.885a1.5 1.5 0 0 1 2.458 0M2.5 19.5q2-2 4 0t4 0v-12h3v12q2-2 4 0t4 0");
}
</style><path class="iz8fzlbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:spar-buoy"} {...others} />);
}

export default Component;
