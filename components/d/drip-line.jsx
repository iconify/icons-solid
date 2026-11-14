import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d1ft-ibuf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5h19m-16.75 4s-2.25 4-2.25 6.75a2.25 2.25 0 0 0 4.5 0C7 13.5 4.75 9.5 4.75 9.5m7.25 0s-2.25 4-2.25 6.75a2.25 2.25 0 0 0 4.5 0C14.25 13.5 12 9.5 12 9.5m7.25 0S17 13.5 17 16.25a2.25 2.25 0 0 0 4.5 0c0-2.75-2.25-6.75-2.25-6.75");
}
</style><path class="d1ft-ibuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:drip-line"} {...others} />);
}

export default Component;
