import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bv_0_6b_u {
  width: 18.5px;
  height: 6.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.d03mmjyvu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 6h7.75M12 9.25v12m0-7.75c-3 0-5.5 1.5-5.5 4.5v3.25M12 13.5c3 0 5.5 1.5 5.5 4.5v3.25");
}

.q2jk3jt7w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.25 6h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="bv_0_6b_u"/><path class="q2jk3jt7w"/><path class="d03mmjyvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rootkit"} {...others} />);
}

export default Component;
