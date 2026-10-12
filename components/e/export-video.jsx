import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.acnut49wm {
  d: path("m8.38 12.16l2.99 1.93q.63.41 0 .82l-2.99 1.93q-.63.41-.63-.34v-4q0-.75.63-.34m5.87-9.41h7v7m0-7l-7 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uz6smfb-y {
  width: 13.5px;
  height: 13.5px;
  x: 2.75px;
  y: 7.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="uz6smfb-y"/><path class="acnut49wm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:export-video"} {...others} />);
}

export default Component;
