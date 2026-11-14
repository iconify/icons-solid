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

.p8hiwqncz {
  d: path("M20.5 4H16v16");
}

.swc5hddpl {
  d: path("M11.5 7.5L8 4L4.5 7.5");
}

.v0lwiab8h {
  d: path("M19.5 16.5L16 20l-3.5-3.5m-9 3.5H8V4");
}
</style><g class="hntgybcog"><path class="p8hiwqncz"/><path class="v0lwiab8h"/><path class="swc5hddpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:swap-vertical"} {...others} />);
}

export default Component;
