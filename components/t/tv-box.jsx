import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f61izqzht {
  d: path("M11 11.25v2.5l2.25-1.25Zm-2.75 5.5v2m7.5-2v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.znoquvgxk {
  width: 12.5px;
  height: 8.5px;
  x: 5.75px;
  y: 8.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="znoquvgxk"/><path class="f61izqzht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tv-box"} {...others} />);
}

export default Component;
