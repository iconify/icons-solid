import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ebbts-bkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3L7 5L3.5 7Zm7 2h10m-17 5L7 12l-3.5 2zm7 2h6.3m2.4 0h1.3m-17 5L7 19l-3.5 2zm7 2h2.1m5.4-4.5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="ebbts-bkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:episodes-download"} {...others} />);
}

export default Component;
