import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ggmxwryuj {
  d: path("M3 21v-9a9 9 0 0 1 18 0v9M2.5 21h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ta_s83jhe {
  d: path("M11 9h2a3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 13 19h-2a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 11 9m-3.5 5.5h9");
}
</style><g class="hntgybcog"><path class="ggmxwryuj"/><path class="ta_s83jhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:railway-cutting"} {...others} />);
}

export default Component;
