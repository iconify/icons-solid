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

.tfss18bua {
  d: path("M3 20.5V7a1.5 1.5 0 0 1 1.5-1.5H7L8.5 7m0 6V3h8v10m0-8h3v8");
}

.uz9f1pbvt {
  d: path("M3 20.5L5.5 13h16L19 20.5Zm7.5-13L12 9l2.75-2.75");
}
</style><g class="hntgybcog"><path class="tfss18bua"/><path class="uz9f1pbvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:audit-evidence"} {...others} />);
}

export default Component;
