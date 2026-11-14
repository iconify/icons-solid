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

.lj-rjhqfd {
  d: path("m12 18l-4.25-4.25A3 3 0 0 1 12 10a3 3 0 0 1 4.25 3.75Z");
}

.o2bcp8b3t {
  d: path("M6.5 4.5h11A3.5 3.5 0 0 1 21 8v9.5a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5V8a3.5 3.5 0 0 1 3.5-3.5m1.5-2v4m8-4v4");
}
</style><g class="hntgybcog"><path class="o2bcp8b3t"/><path class="lj-rjhqfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:anniversary-calendar"} {...others} />);
}

export default Component;
