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

.t_vvzubya {
  fill: currentColor;
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.ybyzelb1a {
  d: path("M2.5 12a9.5 3.5 0 1 0 19 0a9.5 3.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="ybyzelb1a"/><path class="t_vvzubya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:black-hole"} {...others} />);
}

export default Component;
