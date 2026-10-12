import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hadkmwhbm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.75h15.5v18.5H4.25zm4 4.5v9.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xie25eb5k {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.25 7.25h.01M8.25 12h.01m-.01 4.75h.01");
}

.zzr_volsu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 7.25h5m-5 4.75h5m-5 4.75h3.5");
}
</style><g class="ux2u0rbkq"><path class="hadkmwhbm"/><path class="xie25eb5k"/><path class="zzr_volsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:itinerary-sharp"} {...others} />);
}

export default Component;
