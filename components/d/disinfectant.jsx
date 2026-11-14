import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zfabc541t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 11h9v8.5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Zm2 0V5.5A1.5 1.5 0 0 1 8 4h7v3.5h-3.5V11M18 3h.01M18 8.5h.01m1.74-2.75h.01");
}
</style><path class="zfabc541t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:disinfectant"} {...others} />);
}

export default Component;
