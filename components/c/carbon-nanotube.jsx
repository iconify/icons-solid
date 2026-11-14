import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tn7mb8m9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a2 7 0 1 0 4 0a2 7 0 1 0-4 0m2-7h15m-15 14h15m0-14a2 7 0 0 1 0 14m-2.941-6.244l-.875 1.5a1.5 1.5 0 0 1-1.296.744h-1.776a1.5 1.5 0 0 1-1.296-.744l-.875-1.5a1.5 1.5 0 0 1 0-1.512l.875-1.5A1.5 1.5 0 0 1 12.612 9h1.776a1.5 1.5 0 0 1 1.296.744l.875 1.5a1.5 1.5 0 0 1 0 1.512");
}
</style><path class="tn7mb8m9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:carbon-nanotube"} {...others} />);
}

export default Component;
