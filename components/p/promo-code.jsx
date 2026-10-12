import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cl6c5ob5f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 10.25h.01M9 13.75h.01M13 12h.01m2.74 0h.01m2.74 0h.01");
}

.sow30glbt {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.75 14l3.5-4");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yquyyfk4l {
  width: 18.5px;
  height: 9.5px;
  x: 2.75px;
  y: 7.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}
</style><g class="y9tr6bcfx"><rect class="yquyyfk4l"/><path class="sow30glbt"/><path class="cl6c5ob5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:promo-code"} {...others} />);
}

export default Component;
