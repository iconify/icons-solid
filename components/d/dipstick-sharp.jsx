import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gyds-1b5g {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6h.01");
}

.o9rt72bdu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.4 8.4l8.1 8.1m-.47.72l1.19-1.19l.53-.53l.53.53l2.44 2.44l.53.53l-.53.53l-1.19 1.19l-.53.53l-.53-.53l-2.44-2.44l-.53-.53z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.z2kxtnbxu {
  cx: 6px;
  cy: 6px;
  r: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><circle class="z2kxtnbxu"/><path class="gyds-1b5g"/><path class="o9rt72bdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dipstick-sharp"} {...others} />);
}

export default Component;
