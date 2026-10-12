import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ctt9_pbte {
  d: path("m16.61 9.74l3.78-2.23q.86-.51.86.49v8q0 1-.86.49l-3.78-2.23q-.86-.51-.86-1.51v-1.5q0-1 .86-1.51");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zj2jvpbmh {
  width: 13px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="zj2jvpbmh"/><path class="ctt9_pbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:video-share"} {...others} />);
}

export default Component;
