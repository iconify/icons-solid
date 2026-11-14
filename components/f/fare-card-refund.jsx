import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ahuvu_bjv {
  d: path("M9.125 8.5h5.75a2.625 2.625 0 0 1 2.625 2.625v1.75a2.625 2.625 0 0 1-2.625 2.625h-5.75A2.625 2.625 0 0 1 6.5 12.875v-1.75A2.625 2.625 0 0 1 9.125 8.5M6.5 11h11");
}

.hn8y3497e {
  d: path("m3.5 3.75l.25 3.5L7 5.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nwjh2jbvu {
  d: path("M7.25 20.25a9.5 9.5 0 1 0-3.5-13");
}
</style><g class="hntgybcog"><path class="ahuvu_bjv"/><path class="nwjh2jbvu"/><path class="hn8y3497e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fare-card-refund"} {...others} />);
}

export default Component;
