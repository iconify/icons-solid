import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fd6v2-iry {
  d: path("M12 16.25v4m-3.75 0h7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yoou77b3v {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="yoou77b3v"/><path class="fd6v2-iry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:monitor-portrait"} {...others} />);
}

export default Component;
