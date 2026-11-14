import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tmwrb5bdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 15.5h14.5A1.75 1.75 0 0 1 21 17.25v.5a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 17.75v-.5a1.75 1.75 0 0 1 1.75-1.75m.25 0V12a7 7 0 0 1 14 0v3.5m-7-7.75v5m-2.5-2.5h5");
}
</style><path class="tmwrb5bdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:emergency-call-button"} {...others} />);
}

export default Component;
