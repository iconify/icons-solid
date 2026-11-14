import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.difuoeb1h {
  d: path("M3.5 7H13V5.5h2.5v9H13v-2H3.5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sz6a4q08e {
  d: path("M5.5 12.5L4 20h3.25L9 12.5m9.25-5a4 4 0 0 1 0 5m2-7a7 7 0 0 1 0 9");
}
</style><g class="hntgybcog"><path class="difuoeb1h"/><path class="sz6a4q08e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:traffic-radar"} {...others} />);
}

export default Component;
