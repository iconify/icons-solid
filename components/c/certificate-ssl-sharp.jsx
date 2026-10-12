import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dwpo8vbpb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.25 17.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.y-2hr84gg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h18.5v12.5H2.75zm3.75 4h11m-11 3.5H11");
}

.zszusgbho {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.25 14h8v7.25h-8zm2.25 0v-3H19v3");
}
</style><g class="ux2u0rbkq"><path class="y-2hr84gg"/><path class="zszusgbho"/><path class="dwpo8vbpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:certificate-ssl-sharp"} {...others} />);
}

export default Component;
