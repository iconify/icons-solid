import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bseovd0rs {
  d: path("M2 5.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.e8vyi9p1r {
  d: path("M4 3.5h16a2 2 0 0 1 0 4H4M2 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qwl5y4_7l {
  d: path("M4 11h16a2 2 0 0 1 0 4H4m-.5 6.5l3-6.5l3 6.5m5 0l3-6.5l3 6.5");
}
</style><g class="hntgybcog"><path class="bseovd0rs"/><path class="e8vyi9p1r"/><path class="qwl5y4_7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:drill-pipe-rack"} {...others} />);
}

export default Component;
