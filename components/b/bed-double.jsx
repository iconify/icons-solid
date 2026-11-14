import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vwe2a4bek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4v16m0-8.5h16a2 2 0 0 1 2 2v3H3m18 0V20M7.5 7.5h.75A1.75 1.75 0 0 1 10 9.25v.5a1.75 1.75 0 0 1-1.75 1.75H7.5a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 7.5 7.5m7 0h.75A1.75 1.75 0 0 1 17 9.25v.5a1.75 1.75 0 0 1-1.75 1.75h-.75a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 14.5 7.5");
}
</style><path class="vwe2a4bek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bed-double"} {...others} />);
}

export default Component;
