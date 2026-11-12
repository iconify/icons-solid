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

.j1jlz4vzi {
  d: path("M19 17L12 11L5 17");
}

.qowkc_bfp {
  d: path("M19 13L12 7L5 13");
}
</style><g class="hntgybcog"><path class="qowkc_bfp"/><path class="j1jlz4vzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-up-linear"} {...others} />);
}

export default Component;
