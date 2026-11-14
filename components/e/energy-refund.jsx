import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f3a-c11xy {
  d: path("m12.75 9.25l-2.5 3h3.5l-2.5 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hveos1a4i {
  d: path("M3.75 7.25a9.5 9.5 0 1 1 0 9.5");
}

.n-9w5rbts {
  d: path("m6.75 6.5l-3 .75l-.75-3M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}
</style><g class="hntgybcog"><path class="hveos1a4i"/><path class="n-9w5rbts"/><path class="f3a-c11xy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:energy-refund"} {...others} />);
}

export default Component;
