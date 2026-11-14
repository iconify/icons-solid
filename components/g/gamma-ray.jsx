import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a75jntbgd {
  d: path("m18.5 9l3 3l-3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vlkep1bth {
  d: path("M2.5 12L5 6.5l3.5 11l3.5-11l3 9l1.75-3.5h4.75");
}
</style><g class="hntgybcog"><path class="vlkep1bth"/><path class="a75jntbgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gamma-ray"} {...others} />);
}

export default Component;
