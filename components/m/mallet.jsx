import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bo_s7_bmn {
  width: 16.5px;
  height: 7.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.5px;
}

.d-jylwbze {
  d: path("M7.75 5v3m8.5-3v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5-j0-wxl {
  width: 3px;
  height: 11px;
  x: 10.5px;
  y: 10.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="bo_s7_bmn"/><path class="d-jylwbze"/><rect class="x5-j0-wxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mallet"} {...others} />);
}

export default Component;
