import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qoyrx1dgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6.5L5 8l2.75-3M11 6.5h9.5m-17 6L5 14l2.75-3M11 12.5h9.5m-17 6L5 20l2.75-3M11 18.5h9.5");
}
</style><path class="qoyrx1dgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:allowlist"} {...others} />);
}

export default Component;
