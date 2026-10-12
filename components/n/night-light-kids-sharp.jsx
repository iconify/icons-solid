import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cmmcyfb_v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.88 14.41a3.5 3.5 0 1 1-3.84-4.38a3 3 0 0 0 3.84 4.38Z");
}

.kyfs_k2_i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.25 9.5h.01");
}

.o8l_wvups {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 2.75v3m5.5-3v3m-10 0h14.5v15.5H4.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="o8l_wvups"/><path class="cmmcyfb_v"/><path class="kyfs_k2_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:night-light-kids-sharp"} {...others} />);
}

export default Component;
