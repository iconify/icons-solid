import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cf2bgnbwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 9.5h2.318a1.75 1.75 0 0 0 .815-.201l6.552-3.449A1.75 1.75 0 0 1 17.5 7.399v9.202a1.75 1.75 0 0 1-2.565 1.549l-6.552-3.449a1.75 1.75 0 0 0-.815-.201H5.25a1.75 1.75 0 0 1-1.75-1.75v-1.5A1.75 1.75 0 0 1 5.25 9.5m1.25 5l1.5 5M20.5 10v4");
}
</style><path class="cf2bgnbwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:announcement"} {...others} />);
}

export default Component;
