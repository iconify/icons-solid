import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.asvo2k6jy {
  d: path("M9.5 2.5za3 3 0 0 1 3 3V11a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5.5a3 3 0 0 1 3-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rjwyi07aa {
  d: path("M3 11a6.5 6.5 0 0 0 13 0m-6.5 6.5v4m6.75-4l2.25-2.25l2.25 2.25m-2.25-2.25v6.5m-2.25-2.25l2.25 2.25l2.25-2.25");
}
</style><g class="hntgybcog"><path class="asvo2k6jy"/><path class="rjwyi07aa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:vocal-range"} {...others} />);
}

export default Component;
