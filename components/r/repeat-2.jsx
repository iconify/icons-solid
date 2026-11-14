import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bif6xt-xx {
  d: path("m8 13.5l-3 3l3 3");
}

.dxt0xxvoj {
  d: path("m16 4.5l3 3l-3 3m3.5.5v2.5a3 3 0 0 1-3 3H5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tt2fo2bdk {
  d: path("M4.5 13v-2.5a3 3 0 0 1 3-3H19");
}
</style><g class="hntgybcog"><path class="tt2fo2bdk"/><path class="dxt0xxvoj"/><path class="bif6xt-xx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:repeat-2"} {...others} />);
}

export default Component;
