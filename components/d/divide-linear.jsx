import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.byh8rvbcw {
  d: path("M12 6H12.0001");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uci4f6n5q {
  d: path("M12 18H12.0001");
}

.y0cxd-7om {
  d: path("M4 12H20");
}
</style><g class="hntgybcog"><path class="y0cxd-7om"/><path class="byh8rvbcw"/><path class="uci4f6n5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:divide-linear"} {...others} />);
}

export default Component;
