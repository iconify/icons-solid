import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f6re5nbed {
  width: 6px;
  height: 4px;
  x: 12px;
  y: 10px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ktwgrg95p {
  d: path("M2.75 12H6m12 0h3.25M6 11c-5-8.5 17-8.5 12 0M6 13c-5 8.5 17 8.5 12 0");
}

.mfxvsbbqy {
  width: 6px;
  height: 4px;
  x: 6px;
  y: 10px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="mfxvsbbqy"/><rect class="f6re5nbed"/><path class="ktwgrg95p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:magnet-field"} {...others} />);
}

export default Component;
