import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gio-r1tyq {
  d: path("M7.6 10.5c0-4.25 1.8-6.75 4.4-6.75s4.4 2.5 4.4 6.75m-.5 5.25l4.6-5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s02reubfv {
  d: path("M8.75 10h4.5q1.25 0 1.5 1.23l1.75 8.79q.25 1.23-1 1.23h-9q-1.25 0-1-1.23l1.75-8.79Q7.5 10 8.75 10m.5 0a2.75 2.75 0 0 1 5.5 0Z");
}
</style><g class="hntgybcog"><path class="s02reubfv"/><path class="gio-r1tyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chai-kettle"} {...others} />);
}

export default Component;
