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

.khskffb4i {
  d: path("m9 18.5l3 3l3-3");
}

.n5u7btygh {
  d: path("M6 7c0 4 6 3 6 7v7m6-14c0 4-6 3-6 7");
}

.omq-xqb1m {
  d: path("M3.5 4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m12 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="omq-xqb1m"/><path class="n5u7btygh"/><path class="khskffb4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:route-merge"} {...others} />);
}

export default Component;
