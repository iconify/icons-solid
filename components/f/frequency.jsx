import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a417gfbbs {
  d: path("M3 9.5q2.25-7.875 4.5 0t4.5 0t4.5 0t4.5 0");
}

.a4gbf3bzs {
  d: path("M3 16.5v2h9v-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a417gfbbs"/><path class="a4gbf3bzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:frequency"} {...others} />);
}

export default Component;
