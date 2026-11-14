import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jhxuy_baa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m21.5 2.5l-7 7m0 0L3 14a11 11 0 0 0 7 7Zm-2 2l-6.25 4.25M13 12.5L9.5 19m6 1.5h.01m2.99 0h.01m2.99 0h.01");
}
</style><path class="jhxuy_baa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:data-cleaning"} {...others} />);
}

export default Component;
