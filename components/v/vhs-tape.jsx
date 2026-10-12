import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eoikslbmv {
  d: path("M9.75 13.5h.01m4.49 0h.01");
}

.f_v43-baf {
  width: 11.5px;
  height: 4px;
  x: 6.25px;
  y: 11.5px;
  rx: 1.25px;
}

.h63mp4bln {
  d: path("M6.75 8.5h10.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.soqifdb1n {
  width: 18.5px;
  height: 13px;
  x: 2.75px;
  y: 5.5px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="soqifdb1n"/><path class="h63mp4bln"/><rect class="f_v43-baf"/><path class="eoikslbmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:vhs-tape"} {...others} />);
}

export default Component;
