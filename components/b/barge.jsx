import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_u79lk2z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5h19l-2 4.5h-15Zm3.75-5h1.5A1.75 1.75 0 0 1 9.5 7.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-1.5A1.75 1.75 0 0 1 4.5 8.75v-1.5A1.75 1.75 0 0 1 6.25 5.5m-3.75 13q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="j_u79lk2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:barge"} {...others} />);
}

export default Component;
