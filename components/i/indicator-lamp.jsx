import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qt0b3tbls {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.625 13.5h8.75A2.625 2.625 0 0 1 19 16.125v1.75a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 5 17.875v-1.75A2.625 2.625 0 0 1 7.625 13.5m-.125 0V10a4.5 4.5 0 0 1 9 0v3.5m-13-9l2 2m15-2l-2 2");
}
</style><path class="qt0b3tbls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:indicator-lamp"} {...others} />);
}

export default Component;
