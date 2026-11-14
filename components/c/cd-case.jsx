import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.msn1o6b_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 6.5h5.75A2.625 2.625 0 0 1 13.5 9.125v5.75a2.625 2.625 0 0 1-2.625 2.625h-5.75A2.625 2.625 0 0 1 2.5 14.875v-5.75A2.625 2.625 0 0 1 5.125 6.5M13.5 8a5 5 0 1 1 0 8M5.25 6.5v11M16.5 12h.01");
}
</style><path class="msn1o6b_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cd-case"} {...others} />);
}

export default Component;
