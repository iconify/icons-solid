import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kiex9hzma {
  d: path("M2.5 18h19m-18 0L5 12.5L8.5 10l3-4L16 7l2.5 4l2 2l.5 5");
}

.xds56mb7v {
  d: path("m8.5 10l2.5 3.5l-.5 4.5m.5-4.5l3.5-1l4-1.5m-4 1.5L15 18");
}
</style><g class="hntgybcog"><path class="kiex9hzma"/><path class="xds56mb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:coke-fuel"} {...others} />);
}

export default Component;
