import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.acukmzbyh {
  d: path("m9.75 3l-1.5 3.5l2.5 2.5l-1.5 4M18 14.5V18m0 3h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbyre3bpg {
  d: path("M4.25 8a5 5 0 1 0 10 0a5 5 0 1 0-10 0M3 21.5C3 18.25 5.5 16 9.25 16c3.222 0 5.521 1.661 6.105 4.19");
}
</style><g class="hntgybcog"><path class="wbyre3bpg"/><path class="acukmzbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:compromised-account"} {...others} />);
}

export default Component;
