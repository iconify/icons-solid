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

.j8tytbbff {
  width: 8.5px;
  height: 12.75px;
  x: 3.75px;
  y: 8.5px;
  rx: 2.5px;
}

.q2j9owbjj {
  width: 5px;
  height: 2.75px;
  x: 5.5px;
  y: 2.75px;
  rx: 1px;
}

.y_amm84ko {
  d: path("M17.75 4.75c2.5 2.5 2.5 4.5 0 7s-2.5 4.5 0 7");
}
</style><g class="hntgybcog"><rect class="q2j9owbjj"/><rect class="j8tytbbff"/><path class="y_amm84ko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:conditioner"} {...others} />);
}

export default Component;
