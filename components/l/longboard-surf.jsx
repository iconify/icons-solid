import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aiucu5zzp {
  d: path("M7.75 18L11 20.5l-1.25-3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqhz4w1aa {
  d: path("M4 19c0-5.5 9.5-15 15-15c0 5.5-9.5 15-15 15");
}
</style><g class="hntgybcog"><path class="wqhz4w1aa"/><path class="aiucu5zzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:longboard-surf"} {...others} />);
}

export default Component;
