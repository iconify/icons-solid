import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r866nrb5z {
  d: path("M8 17.25a4 4 0 0 1 8 0Zm5.61-14.36a9.25 9.25 0 0 1 5.48 3.16m1.6 2.79a9.25 9.25 0 0 1 0 6.32m-1.6 2.79a9.25 9.25 0 0 1-5.48 3.16m-3.22 0a9.25 9.25 0 0 1-5.48-3.16m-1.6-2.79a9.25 9.25 0 0 1 0-6.32m1.6-2.79a9.25 9.25 0 0 1 5.48-3.16");
}

.rlp_7mbtl {
  cx: 12px;
  cy: 8.5px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="rlp_7mbtl"/><path class="r866nrb5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:quarantine"} {...others} />);
}

export default Component;
