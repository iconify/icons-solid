import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g58_oq06k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3v11m5-11v11M3.5 6.5h12M3.5 11h12m1.25 6.75h2.5A1.75 1.75 0 0 1 21 19.5v.25a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-.25a1.75 1.75 0 0 1 1.75-1.75m-.5 0V16.5a1.75 1.75 0 0 1 3.5 0v1.25");
}
</style><path class="g58_oq06k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hash-lock"} {...others} />);
}

export default Component;
