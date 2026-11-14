import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g29raibhd {
  fill: currentColor;
  d: path("M10.25 16.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n1-nn2b5n {
  d: path("M10.25 5.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m0 5.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.rtdlglrwx {
  d: path("M11.625 2h.75a4.375 4.375 0 0 1 4.375 4.375v9.25A4.375 4.375 0 0 1 12.375 20h-.75a4.375 4.375 0 0 1-4.375-4.375v-9.25A4.375 4.375 0 0 1 11.625 2M12 20v2");
}
</style><g class="hntgybcog"><path class="rtdlglrwx"/><path class="n1-nn2b5n"/><path class="g29raibhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:traffic-light-green"} {...others} />);
}

export default Component;
