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

.j5ljj1bje {
  d: path("m4.5 10.75l2.9 2.2a1.5 1.5 0 0 0 1.7 0l2.9-2.2M16.25 13V3.25h4.5L19.5 6l1.25 2.75h-4.5");
}

.u7n6q4bzr {
  width: 11px;
  height: 12px;
  x: 2.75px;
  y: 7.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="u7n6q4bzr"/><path class="j5ljj1bje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mail-flag"} {...others} />);
}

export default Component;
