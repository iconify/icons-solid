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

.qru4p6brf {
  d: path("M5 7L12 13L13.75 11.5M19 7L16.6667 9");
}

.t1tvwhbhe {
  d: path("M19 11L12 17L10.25 15.5M5 11L7.33333 13");
}
</style><g class="hntgybcog"><path class="t1tvwhbhe"/><path class="qru4p6brf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-down-broken"} {...others} />);
}

export default Component;
