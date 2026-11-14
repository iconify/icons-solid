import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pt-vyac_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17a7.5 7.5 0 0 1 15 0ZM4 17h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 17m8-9.75V9.5m-1.5-2.25h3M4.5 6L6 7.5M19.5 6L18 7.5");
}
</style><path class="pt-vyac_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:staff-call"} {...others} />);
}

export default Component;
