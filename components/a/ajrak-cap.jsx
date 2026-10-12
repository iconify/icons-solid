import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dxpi0qbte {
  d: path("M3.75 15a8.25 8.25 0 0 1 16.5 0v2.5A1.25 1.25 0 0 1 19 18.75H5a1.25 1.25 0 0 1-1.25-1.25Zm.75-2h15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwct9wbvc {
  d: path("m7 14.75l1.5 1.5l-1.5 1.5l-1.5-1.5Zm5 0l1.5 1.5l-1.5 1.5l-1.5-1.5Zm5 0l1.5 1.5l-1.5 1.5l-1.5-1.5Z");
}
</style><g class="hntgybcog"><path class="dxpi0qbte"/><path class="wwct9wbvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ajrak-cap"} {...others} />);
}

export default Component;
