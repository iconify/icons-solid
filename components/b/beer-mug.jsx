import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ffonnb25f {
  d: path("M15.75 13.25h1.75a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-1.75M4.75 8.5V7.25a2.5 2.5 0 0 1 2.75-2.5A3.25 3.25 0 0 1 13 4.5a2.75 2.75 0 0 1 2.75 2.75V8.5Zm3.5 5.75v4m4-4v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zbc5ebbrx {
  width: 11px;
  height: 10px;
  x: 4.75px;
  y: 11.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="zbc5ebbrx"/><path class="ffonnb25f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:beer-mug"} {...others} />);
}

export default Component;
