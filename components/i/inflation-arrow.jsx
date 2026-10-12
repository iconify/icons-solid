import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.db2crcbgw {
  d: path("M10.46 12.29c-.25-.62-.93-1.08-1.71-1.08c-.99 0-1.71.56-1.71 1.33c0 1.77 3.56.99 3.56 2.88c0 .81-.78 1.36-1.86 1.36c-.84 0-1.55-.46-1.86-1.08m1.87-5.57v1.08m0 5.58v1.08m9.5 2.38v-16m-3 3l3-3l3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rbywe3b-o {
  cx: 8.75px;
  cy: 14px;
  r: 6px;
}
</style><g class="hntgybcog"><circle class="rbywe3b-o"/><path class="db2crcbgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:inflation-arrow"} {...others} />);
}

export default Component;
