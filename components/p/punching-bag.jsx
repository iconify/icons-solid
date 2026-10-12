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

.mv7lyoemj {
  d: path("M6.75 11h10.5m-10.5 7h10.5M12 2.75v2.5m-3.25 2.5L12 5.25l3.25 2.5");
}

.z6h2hewfl {
  width: 10.5px;
  height: 13.5px;
  x: 6.75px;
  y: 7.75px;
  rx: 3.25px;
}
</style><g class="hntgybcog"><rect class="z6h2hewfl"/><path class="mv7lyoemj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:punching-bag"} {...others} />);
}

export default Component;
