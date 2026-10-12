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

.pzntaqbfy {
  d: path("m9.88 9.5l2.75 4.75h-5.5ZM2.75 12H5.5m2.25 5v4.25M12 17v4.25M14.25 12l7-4.5m-7 4.5h7m-7 0l7 4.5");
}

.sm63zjb8n {
  width: 8.75px;
  height: 10px;
  x: 5.5px;
  y: 7px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="sm63zjb8n"/><path class="pzntaqbfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:spectrometer"} {...others} />);
}

export default Component;
