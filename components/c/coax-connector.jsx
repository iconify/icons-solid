import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lzxzrfb2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5h7m-7 5h7m2.625-9h2.25A2.625 2.625 0 0 1 17 8.125v7.75a2.625 2.625 0 0 1-2.625 2.625h-2.25A2.625 2.625 0 0 1 9.5 15.875v-7.75A2.625 2.625 0 0 1 12.125 5.5M17 12h4.5m-8.25-6.5v13");
}
</style><path class="lzxzrfb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:coax-connector"} {...others} />);
}

export default Component;
