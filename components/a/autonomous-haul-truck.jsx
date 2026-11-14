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

.wttwd-u9a {
  d: path("M15 6.75a1.5 1.5 0 0 1 3 0m-12.5 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m10.25 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.y0uaejb3e {
  d: path("m2.5 5.25l1.5 8h17.5v-3.5l-3.25-3H15v6.5m-3.5 0l.75-8");
}
</style><g class="hntgybcog"><path class="y0uaejb3e"/><path class="wttwd-u9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:autonomous-haul-truck"} {...others} />);
}

export default Component;
