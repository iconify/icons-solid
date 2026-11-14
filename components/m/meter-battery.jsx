import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d5-67kfvf {
  d: path("M6 5h10a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 16 19H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5m15.5 4.5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zfee3fbnz {
  d: path("M5.5 15.5a5.5 5.5 0 0 1 11 0m-5.5 0l1.25-2");
}
</style><g class="hntgybcog"><path class="d5-67kfvf"/><path class="zfee3fbnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:meter-battery"} {...others} />);
}

export default Component;
