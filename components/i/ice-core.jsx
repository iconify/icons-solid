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

.ym9vz_bku {
  d: path("M8 4.5v15a4 1.5 0 0 0 8 0v-15m-8 6L16 9m-8 7l8-2");
}

.z93kq-b6f {
  d: path("M8 4.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="z93kq-b6f"/><path class="ym9vz_bku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ice-core"} {...others} />);
}

export default Component;
