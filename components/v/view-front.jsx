import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wdt7gwlme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 9h9v9h-9Zm0 0l3-3h9v9l-3 3m0-9l3-3m-19 7.5h4.25M4.25 11l2.5 2.5l-2.5 2.5");
}
</style><path class="wdt7gwlme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:view-front"} {...others} />);
}

export default Component;
