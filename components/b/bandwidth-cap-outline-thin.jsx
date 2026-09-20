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

.ml3aqbbkk {
  d: path("M4 8v12");
}

.pq2hynbuc {
  d: path("m6 18 4 -4 3 3 6 -6");
}

.rw2cw9fuy {
  d: path("M4 20h17");
}

.xf07dvr8m {
  d: path("M2 5h20");
}
</style><g class="hntgybcog"><path class="xf07dvr8m"/><path class="ml3aqbbkk"/><path class="rw2cw9fuy"/><path class="pq2hynbuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:bandwidth-cap-outline-thin"} {...others} />);
}

export default Component;
