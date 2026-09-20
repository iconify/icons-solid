import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.f-8yj6x-r {
  d: path("m14 11 3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l1jjkky7x {
  d: path("M8 18h8");
}

.m54wnlm5b {
  d: path("M14 11a3 3 0 0 1 -6 0");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="m54wnlm5b"/><path class="f-8yj6x-r"/><path class="l1jjkky7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:signature-outline-thin"} {...others} />);
}

export default Component;
