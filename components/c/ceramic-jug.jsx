import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dnqd5f0lu {
  d: path("M5 3.5h9v3c2.5 1.5 3.5 5 3.5 8c0 4-2 6.5-5 6.5h-3c-3 0-5-2.5-5-6.5c0-3 1-6.5 3.5-8v-1Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.udjs08bgn {
  d: path("M14 5.5h3a3 3 0 0 1 3 3V10a3 3 0 0 1-2.5 3");
}
</style><g class="hntgybcog"><path class="dnqd5f0lu"/><path class="udjs08bgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ceramic-jug"} {...others} />);
}

export default Component;
