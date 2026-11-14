import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.blml5tbdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 18h20M2.5 18v-8q0-2 1.5-2V5h1.5v3Q7 8 7 10v8m5-7za2.25 2.25 0 0 1 2.25 2.25v2.5A2.25 2.25 0 0 1 12 18a2.25 2.25 0 0 1-2.25-2.25v-2.5A2.25 2.25 0 0 1 12 11m5 7v-6l1.5-2V8H20v2l1.5 2v6");
}
</style><path class="blml5tbdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:beauty-shelf"} {...others} />);
}

export default Component;
