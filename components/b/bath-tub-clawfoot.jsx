import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xp-dcka1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h18c0 5-3 8-7 8h-4c-4 0-7-3-7-8Zm4 7l-1.5 4.5M17 16l1.5 4.5M17 9V5.5a2 2 0 0 0-4 0V6");
}
</style><path class="xp-dcka1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bath-tub-clawfoot"} {...others} />);
}

export default Component;
