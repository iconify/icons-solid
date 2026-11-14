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

.ttsfjubit {
  d: path("M2.5 2.5v19h19");
}

.tx7vg9nnx {
  d: path("M5.5 11L8 9.5l2.5 3.5l3-6l3 10L20 4");
}
</style><g class="hntgybcog"><path class="ttsfjubit"/><path class="tx7vg9nnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bullwhip-effect"} {...others} />);
}

export default Component;
