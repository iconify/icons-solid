import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cql1pwtbp {
  cx: 12px;
  cy: 16px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lv9esmbjh {
  width: 11.5px;
  height: 18.5px;
  x: 6.25px;
  y: 2.75px;
  rx: 2px;
}

.uekllowgs {
  d: path("M9.25 6.25h5.5m-5.5 3h5.5");
}
</style><g class="hntgybcog"><rect class="lv9esmbjh"/><path class="uekllowgs"/><circle class="cql1pwtbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tower-pc"} {...others} />);
}

export default Component;
