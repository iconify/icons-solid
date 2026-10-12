import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-n67j64d {
  d: path("m15.25 10.25l4.4-2.45a1 1 0 0 1 1.6.8v6.8a1 1 0 0 1-1.6.8l-4.4-2.45Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lyfahbc8x {
  width: 12.5px;
  height: 11.5px;
  x: 2.75px;
  y: 6.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="lyfahbc8x"/><path class="a-n67j64d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:video-interview"} {...others} />);
}

export default Component;
