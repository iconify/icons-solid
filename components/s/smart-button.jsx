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

.o1cy2tblq {
  cx: 12px;
  cy: 15.5px;
  r: 2.75px;
}

.qlu4-7b0e {
  d: path("M6.38 8.8a8.75 8.75 0 0 1 11.24 0M4.45 6.5a11.75 11.75 0 0 1 15.1 0");
}

.ydy0opbpr {
  cx: 12px;
  cy: 15.5px;
  r: 5.75px;
}
</style><g class="hntgybcog"><circle class="ydy0opbpr"/><circle class="o1cy2tblq"/><path class="qlu4-7b0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:smart-button"} {...others} />);
}

export default Component;
