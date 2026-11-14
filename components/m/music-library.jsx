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

.ias00wbuv {
  d: path("M14.25 13V7l3.25 1");
}

.ilv9-4bko {
  d: path("M10 3.5h8A3.5 3.5 0 0 1 21.5 7v7a3.5 3.5 0 0 1-3.5 3.5h-8A3.5 3.5 0 0 1 6.5 14V7A3.5 3.5 0 0 1 10 3.5");
}

.nn_kc8baz {
  d: path("M3 8v10a2.5 2.5 0 0 0 2.5 2.5h11M10.75 13a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="ilv9-4bko"/><path class="nn_kc8baz"/><path class="ias00wbuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:music-library"} {...others} />);
}

export default Component;
