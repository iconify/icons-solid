import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.crjamgbxq {
  d: path("M15.25 12L17 13.75l3-3");
}

.heql7dbwp {
  fill: currentColor;
  d: path("M2.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rc5uvcc8k {
  d: path("M13 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.te6a92q0t {
  d: path("M4 12h9");
}
</style><g class="hntgybcog"><path class="te6a92q0t"/><path class="heql7dbwp"/><path class="rc5uvcc8k"/><path class="crjamgbxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:application-tracking"} {...others} />);
}

export default Component;
