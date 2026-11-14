import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.osi-kw8pm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5c0-8 4-11.25 7-12m4 0c3 .75 7 4 7 12m-9.5-16h1A1.5 1.5 0 0 1 14 6v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 10 7V6a1.5 1.5 0 0 1 1.5-1.5m-6 2H10m4 0h4.5m-16 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m16 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><path class="osi-kw8pm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bezier-handles"} {...others} />);
}

export default Component;
