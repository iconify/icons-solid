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

.oi8t-ubnp {
  d: path("M6 21.5v-19h12v19m-16-10a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m1.25 1.25v8.75m16.25-10a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m1.25 1.25v8.75");
}

.xo3jsqt9v {
  d: path("M4.5 12q7.5 8 15 0");
}
</style><g class="hntgybcog"><path class="oi8t-ubnp"/><path class="xo3jsqt9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:entry-queue"} {...others} />);
}

export default Component;
