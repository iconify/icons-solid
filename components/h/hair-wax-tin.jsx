import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a51iox5yv {
  d: path("M3 7a9 2.5 0 1 0 18 0A9 2.5 0 1 0 3 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.icmo0obod {
  d: path("M4 8.25v8.25a8 2.75 0 0 0 16 0V8.25");
}

.p016wcc4d {
  d: path("M4 12.5a8 2.75 0 0 0 16 0");
}
</style><g class="hntgybcog"><path class="a51iox5yv"/><path class="icmo0obod"/><path class="p016wcc4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hair-wax-tin"} {...others} />);
}

export default Component;
