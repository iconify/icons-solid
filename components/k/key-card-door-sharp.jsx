import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.myyoyjbzu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.69 12.06L13.621 14l-1.931 1.94m1.6-5.48a5 5 0 0 1 0 7.08");
}

.u_p9z_fnh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 14h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.v2l0w2bvw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h11.5v18.5H6.25zm0 4h11.5");
}
</style><g class="ux2u0rbkq"><path class="v2l0w2bvw"/><path class="u_p9z_fnh"/><path class="myyoyjbzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:key-card-door-sharp"} {...others} />);
}

export default Component;
