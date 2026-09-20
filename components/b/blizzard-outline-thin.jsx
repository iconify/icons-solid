import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9z836b7m {
  d: path("M18.5 15v6m-3 0 6 -6");
}

.em798y7rn {
  d: path("M6 12h14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nrqy16b7j {
  d: path("M3 6h11");
}

.pvfbz5b4i {
  d: path("M3 18h11");
}

.wy-zn0bse {
  d: path("M18.5 3v6m-3 0 6 -6");
}
</style><g class="hntgybcog"><path class="nrqy16b7j"/><path class="em798y7rn"/><path class="pvfbz5b4i"/><path class="wy-zn0bse"/><path class="e9z836b7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:blizzard-outline-thin"} {...others} />);
}

export default Component;
