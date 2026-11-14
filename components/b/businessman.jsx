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

.kk7ojjeht {
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m0 16.75v-5H7v-3.75a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3.75h-2.75v5");
}

.qx-y3uuxm {
  d: path("M10.25 9.75L12 12.5l1.75-2.75M12 12.5V15");
}
</style><g class="hntgybcog"><path class="kk7ojjeht"/><path class="qx-y3uuxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:businessman"} {...others} />);
}

export default Component;
