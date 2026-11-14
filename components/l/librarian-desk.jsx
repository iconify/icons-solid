import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.baf2-l53o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 5.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M3 15c0-2.5 2.25-3.75 5-3.75s5 1.25 5 3.75M2.5 15h19M5 15v6.5M19 15v6.5M15.5 15v-3H21v3m-4.5-3V9h4v3");
}
</style><path class="baf2-l53o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:librarian-desk"} {...others} />);
}

export default Component;
