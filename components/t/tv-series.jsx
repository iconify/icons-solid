import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.excex_8yl {
  d: path("M7.5 21.25h6M6.75 4.75h12a2.5 2.5 0 0 1 2.5 2.5v8M5.25 13h1.5m3 0h1.5m3 0h1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.la_3bbc_g {
  width: 15.5px;
  height: 10.5px;
  x: 2.75px;
  y: 7.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="la_3bbc_g"/><path class="excex_8yl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tv-series"} {...others} />);
}

export default Component;
