import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eanni_blz {
  d: path("M3.5 3v17.5h9.6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k4zaqqbnc {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5M14.5 18l2.5 2.5l4.5-5");
}
</style><g class="hntgybcog"><path class="eanni_blz"/><path class="k4zaqqbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-check"} {...others} />);
}

export default Component;
