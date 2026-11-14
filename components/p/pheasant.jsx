import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vzujacb8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15 4.5l-.5-1.75l2.25 1c1.25 0 2 .75 2.25 1.75l1.75.75L19 7c-.5 2-.5 3-.5 4.5c0 3-2.5 4.5-5.5 4.5l-10.5.5l8-4.5c2-2 3.75-2.5 4.75-4.5c.25-1 0-2-.25-3M13 16l-.5 4.5m3.75-5.25L17 20.5");
}
</style><path class="vzujacb8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pheasant"} {...others} />);
}

export default Component;
