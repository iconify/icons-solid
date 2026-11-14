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

.rjkdsj61t {
  d: path("M3 12c0-4 4-5.5 9-5.5c4 0 7 2.5 9.5 5.5c-2.5 3-5.5 5.5-9.5 5.5c-5 0-9-1.5-9-5.5");
}

.xwusonbim {
  d: path("M8 10q1 2 0 4m4-4.5q1 2.5 0 5m4-4q.75 1.5 0 3");
}
</style><g class="hntgybcog"><path class="rjkdsj61t"/><path class="xwusonbim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cuttlebone"} {...others} />);
}

export default Component;
