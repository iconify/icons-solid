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

.q-qump_tv {
  d: path("M3 10a9 4 0 1 0 18 0a9 4 0 1 0-18 0");
}

.qjg_o9u4m {
  d: path("M3 10v4a9 4 0 0 0 18 0v-4");
}
</style><g class="hntgybcog"><path class="q-qump_tv"/><path class="qjg_o9u4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pill-round"} {...others} />);
}

export default Component;
