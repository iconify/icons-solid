import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cp9r0-fke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 11v-1a7.25 7.25 0 0 1 14.5 0v1m-14.5 0zA2.25 2.25 0 0 1 7 13.25v3.5A2.25 2.25 0 0 1 4.75 19a2.25 2.25 0 0 1-2.25-2.25v-3.5A2.25 2.25 0 0 1 4.75 11m14.5 0za2.25 2.25 0 0 1 2.25 2.25v3.5A2.25 2.25 0 0 1 19.25 19A2.25 2.25 0 0 1 17 16.75v-3.5A2.25 2.25 0 0 1 19.25 11");
}
</style><path class="cp9r0-fke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ear-muffs"} {...others} />);
}

export default Component;
