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

.jo45v1frk {
  cx: 19px;
  cy: 5px;
  r: 2.25px;
}

.vzqc5qb7d {
  d: path("M5 16.75V12.5L8.5 11l-1-3.5L12 7l1-2h3.75M6.6 17.4L17.4 6.6");
}

.yohxqabuf {
  cx: 5px;
  cy: 19px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="yohxqabuf"/><circle class="jo45v1frk"/><path class="vzqc5qb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:route-optimize"} {...others} />);
}

export default Component;
