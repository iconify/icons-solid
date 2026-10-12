import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ayar2fnkf {
  d: path("M9 16.5h6m-.5-3.5l-5-8m0 8l5-8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qr_6dff5e {
  width: 12px;
  height: 7px;
  x: 6px;
  y: 13px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="qr_6dff5e"/><path class="ayar2fnkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:crossed-fingers"} {...others} />);
}

export default Component;
