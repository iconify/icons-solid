import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cdettsbpf {
  d: path("M9.25 17.75V14.5l-1.5-1.75a1 1 0 0 1 1.5-1.25l.5.5V8.75a1.25 1.25 0 0 1 2.5 0V8a1.25 1.25 0 0 1 2.5 0v.75a1.25 1.25 0 0 1 2.5 0v6c0 1.25-.5 2.25-1.25 3Zm0-2.5H17");
}

.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="cdettsbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hand-protection"} {...others} />);
}

export default Component;
