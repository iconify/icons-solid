import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ebo60obky {
  d: path("M6 16.9h12M7.25 4.5v2m-4-.25L4.5 7.5m6.75-1.25L10 7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j6_r9ul_h {
  d: path("M4.25 14.5v-2.25a3 3 0 0 1 6 0v2.25Zm9.5 0v-2.25a3 3 0 0 1 6 0v2.25Z");
}

.ls8c73b0b {
  width: 18.5px;
  height: 4.75px;
  x: 2.75px;
  y: 14.5px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="j6_r9ul_h"/><rect class="ls8c73b0b"/><path class="ebo60obky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ambulance-siren"} {...others} />);
}

export default Component;
