import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7mn70bkm {
  width: 11px;
  height: 9.5px;
  x: 2.75px;
  y: 11.25px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vu-h_7l1h {
  d: path("M2.75 13.25L8.25 17l5.5-3.75m6.5-10.5v12a2 2 0 0 1-4 0v-3l1.5 1.5");
}
</style><g class="hntgybcog"><rect class="e7mn70bkm"/><path class="vu-h_7l1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:phishing"} {...others} />);
}

export default Component;
