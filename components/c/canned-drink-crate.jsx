import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kivn9cc_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 11h13.75a2.625 2.625 0 0 1 2.625 2.625v4.75A2.625 2.625 0 0 1 18.875 21H5.125A2.625 2.625 0 0 1 2.5 18.375v-4.75A2.625 2.625 0 0 1 5.125 11M4 11V5l.75-1.5h2L7.5 5v6m2.75 0V5L11 3.5h2l.75 1.5v6m2.75 0V5l.75-1.5h2L20 5v6M9.5 15.5h5");
}
</style><path class="kivn9cc_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:canned-drink-crate"} {...others} />);
}

export default Component;
