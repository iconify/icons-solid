import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuhj1i7gy {
  cx: 17.5px;
  cy: 13px;
  r: 2px;
}

.d1k_xlftc {
  d: path("M3.5 21.25h6a.75.75 0 0 0 .75-.75c0-1.9-1.65-3-3.75-3s-3.75 1.1-3.75 3a.75.75 0 0 0 .75.75");
}

.gx5zw8bpd {
  d: path("M14.5 21.25h6a.75.75 0 0 0 .75-.75c0-1.9-1.65-3-3.75-3s-3.75 1.1-3.75 3a.75.75 0 0 0 .75.75M4 2.75h5.25A1.25 1.25 0 0 1 10.5 4v1.75A1.25 1.25 0 0 1 9.25 7H8L6.5 8.5V7H4a1.25 1.25 0 0 1-1.25-1.25V4A1.25 1.25 0 0 1 4 2.75m16 0h-5.25A1.25 1.25 0 0 0 13.5 4v1.75A1.25 1.25 0 0 0 14.75 7H16l1.5 1.5V7H20a1.25 1.25 0 0 0 1.25-1.25V4A1.25 1.25 0 0 0 20 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r4qy_xbse {
  cx: 6.5px;
  cy: 13px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="r4qy_xbse"/><path class="d1k_xlftc"/><circle class="cuhj1i7gy"/><path class="gx5zw8bpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:one-on-one"} {...others} />);
}

export default Component;
