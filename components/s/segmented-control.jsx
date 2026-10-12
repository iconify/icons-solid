import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fu1r37b2x {
  d: path("M5.75 7H8.9v10H5.75a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3m9.35.5v9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yu83_7nba {
  width: 18.5px;
  height: 10px;
  x: 2.75px;
  y: 7px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="yu83_7nba"/><path class="fu1r37b2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:segmented-control"} {...others} />);
}

export default Component;
