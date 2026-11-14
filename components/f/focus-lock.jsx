import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d45xcdcfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8V5a2 2 0 0 1 2-2h3m8 0h3a2 2 0 0 1 2 2v3m0 8v3a2 2 0 0 1-2 2h-3m-8 0H5a2 2 0 0 1-2-2v-3m7.625-5h2.75A2.625 2.625 0 0 1 16 13.625v1.25a2.625 2.625 0 0 1-2.625 2.625h-2.75A2.625 2.625 0 0 1 8 14.875v-1.25A2.625 2.625 0 0 1 10.625 11m-.875 0V9a2.25 2.25 0 0 1 4.5 0v2");
}
</style><path class="d45xcdcfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:focus-lock"} {...others} />);
}

export default Component;
