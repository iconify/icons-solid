import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cn-n_sbil {
  d: path("M5 11a7 7 0 0 1 14 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v-5jk5fge {
  d: path("M5 19.5q7 3.5 14 0");
}

.vo9umdbcn {
  d: path("M2.5 15.25a2.5 4.25 0 1 0 5 0a2.5 4.25 0 1 0-5 0m14 0a2.5 4.25 0 1 0 5 0a2.5 4.25 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="cn-n_sbil"/><path class="vo9umdbcn"/><path class="v-5jk5fge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wrestling-headgear"} {...others} />);
}

export default Component;
