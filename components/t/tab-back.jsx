import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a1d_fdc0s {
  d: path("m11.5 9l-3 3l3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tcejqlbgw {
  d: path("M2.5 18.5h2v-11A2.5 2.5 0 0 1 7 5h10a2.5 2.5 0 0 1 2.5 2.5v11h2m-6-6.5h-7");
}
</style><g class="hntgybcog"><path class="tcejqlbgw"/><path class="a1d_fdc0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tab-back"} {...others} />);
}

export default Component;
