import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x-a7p15zi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h6.5V13l-1.75-1.25L6.25 13l-1.5-1.25L3 13Zm17.919 10.442L19.25 11.75L17.75 13l-1.5-1.25L14.5 13V2.5H21v10.4M9.5 7.5h5m.25 10.5l2 2L21 15.75");
}
</style><path class="x-a7p15zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:invoice-match"} {...others} />);
}

export default Component;
