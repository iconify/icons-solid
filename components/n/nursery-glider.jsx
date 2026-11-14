import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ez9d3ktpn {
  d: path("M6.75 9.5h9.75v9.75M8 13.5v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.itxyfybyu {
  d: path("M3 17.5q9 5 18 0");
}

.n-9tk3bho {
  d: path("m5.5 3l2 10.5h10");
}
</style><g class="hntgybcog"><path class="n-9tk3bho"/><path class="ez9d3ktpn"/><path class="itxyfybyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:nursery-glider"} {...others} />);
}

export default Component;
