import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gliukfoxr {
  d: path("M14 12v8h8v-8Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jjma1jbuu {
  d: path("M16 12V9h4v3");
}

.k2jzr9u7f {
  d: path("M5 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.qnck32bfn {
  d: path("M4 16a4 4 0 0 1 8 0");
}
</style><g class="hntgybcog"><path class="k2jzr9u7f"/><path class="qnck32bfn"/><path class="gliukfoxr"/><path class="jjma1jbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:colleague-outline-thin"} {...others} />);
}

export default Component;
