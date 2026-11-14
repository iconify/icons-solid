import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aev1bpbxh {
  d: path("M10.375 4h3.25a7.875 7.875 0 0 1 7.875 7.875v.25A7.875 7.875 0 0 1 13.625 20h-3.25A7.875 7.875 0 0 1 2.5 12.125v-.25A7.875 7.875 0 0 1 10.375 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zb5bxxbox {
  d: path("M7.5 8q-1 2 0 4t0 4M12 8q-1 2 0 4t0 4m4.5-8q-1 2 0 4t0 4");
}
</style><g class="hntgybcog"><path class="aev1bpbxh"/><path class="zb5bxxbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:stretch-marks"} {...others} />);
}

export default Component;
