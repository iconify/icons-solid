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

.lq-t_kbrm {
  d: path("M3.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0");
}

.y3hr-yglf {
  d: path("M7 13a5 5 0 1 0 10 0a5 5 0 1 0-10 0m5-8.5h9.5");
}
</style><g class="hntgybcog"><path class="lq-t_kbrm"/><path class="y3hr-yglf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:particle-accelerator"} {...others} />);
}

export default Component;
