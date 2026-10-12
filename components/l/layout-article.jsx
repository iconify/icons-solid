import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.al90kibfd {
  width: 5px;
  height: 5px;
  x: 7px;
  y: 6.25px;
  rx: 1px;
}

.g6ctus9qt {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sb67racrv {
  d: path("M15 7.25h2m-2 3h2m-10 4.5h10M7 18h6");
}
</style><g class="hntgybcog"><rect class="g6ctus9qt"/><rect class="al90kibfd"/><path class="sb67racrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:layout-article"} {...others} />);
}

export default Component;
