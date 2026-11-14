import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hku_3wucs {
  d: path("M5.5 15a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m4-5.75L7 2.5m7.5 6.75L17 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q2j62qnjb {
  d: path("M10 13.25a2 2 0 1 1 2 2V16m0 2.5h.01");
}
</style><g class="hntgybcog"><path class="hku_3wucs"/><path class="q2j62qnjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:achievement-hidden"} {...others} />);
}

export default Component;
