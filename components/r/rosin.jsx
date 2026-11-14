import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f2ug0gurz {
  d: path("m4.5 15.5l2-2l3 3l-2 2Zm5 1l11-11m-1.789 9.633l1.75.942a1.5 1.5 0 0 1 .789 1.321v1.958a1.5 1.5 0 0 1-.789 1.321l-1.75.942a1.5 1.5 0 0 1-1.422 0l-1.75-.942a1.5 1.5 0 0 1-.789-1.321v-1.958a1.5 1.5 0 0 1 .789-1.321l1.75-.942a1.5 1.5 0 0 1 1.422 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qadduvbcb {
  d: path("m2.5 17.5l15-15l3 3");
}

.yvf3_7ucp {
  d: path("M14.75 16.5L18 18.25l3.25-1.75M18 18.25V22");
}
</style><g class="hntgybcog"><path class="qadduvbcb"/><path class="f2ug0gurz"/><path class="yvf3_7ucp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rosin"} {...others} />);
}

export default Component;
