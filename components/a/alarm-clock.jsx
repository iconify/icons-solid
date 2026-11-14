import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.elimv7bkp {
  d: path("M4.5 13a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l83dnjvhq {
  d: path("M12 9.5V13l2.5 2M3 6l3-3m15 3l-3-3M6.5 18.5l-2 2m13-2l2 2");
}
</style><g class="hntgybcog"><path class="elimv7bkp"/><path class="l83dnjvhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:alarm-clock"} {...others} />);
}

export default Component;
