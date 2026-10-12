import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.emwyyxxra {
  width: 18px;
  height: 11px;
  x: 3px;
  y: 6px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u4i2b-b7m {
  d: path("M14 6v11m-8 0a8 8 0 0 1 8-8");
}
</style><g class="hntgybcog"><rect class="emwyyxxra"/><path class="u4i2b-b7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:golden-ratio"} {...others} />);
}

export default Component;
