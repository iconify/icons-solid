import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_xgh4bbq {
  d: path("M9.75 8.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M7 15.75a8 3 0 1 0 10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qkirkcyvw {
  d: path("M12 17c-2.5-2-6-5-6-8.5a6 6 0 0 1 12 0c0 3.5-3.5 6.5-6 8.5");
}
</style><g class="hntgybcog"><path class="qkirkcyvw"/><path class="d_xgh4bbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:map-pin-pulse"} {...others} />);
}

export default Component;
