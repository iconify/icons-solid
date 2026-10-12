import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cz52nob5z {
  cx: 9px;
  cy: 9.5px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m4l-9ybuj {
  cx: 12px;
  cy: 12px;
  r: 9px;
}

.wtqeeyb2r {
  cx: 14.5px;
  cy: 15px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="m4l-9ybuj"/><circle class="cz52nob5z"/><circle class="wtqeeyb2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:moon-crater"} {...others} />);
}

export default Component;
