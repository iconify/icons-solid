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

.wnibujbed {
  d: path("M19.75 19.75h-8a2.5 2.5 0 0 1-2.5-2.5V4.75");
}

.yrsxudblh {
  d: path("M13 8.5L9.25 4.75L5.5 8.5");
}
</style><g class="hntgybcog"><path class="wnibujbed"/><path class="yrsxudblh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:corner-left-up"} {...others} />);
}

export default Component;
