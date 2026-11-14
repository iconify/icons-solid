import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cxjghxphb {
  d: path("M2.5 11.5V10c0-3.5 4-5 9.5-5s9.5 1.5 9.5 5v1.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j9aymk27t {
  d: path("M4.75 13.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m10 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M3 21l1-2.75M7 21l1-2.75M11 21l1-2.75M15 21l1-2.75M19 21l1-2.75");
}
</style><g class="hntgybcog"><path class="cxjghxphb"/><path class="j9aymk27t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:robot-lawn-mower"} {...others} />);
}

export default Component;
