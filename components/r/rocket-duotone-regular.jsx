import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkhpo871l {
  fill: currentColor;
  d: path("M10 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.c3v-iswgv {
  d: path("m16 12 5 5h-5");
}

.g7g9z5bnc {
  d: path("m12 2 4 4v11H8V6Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qrqk-5btd {
  d: path("m9 17 3 3 3 -3");
}

.sc1yd0n6y {
  d: path("m8 12 -5 5h5");
}

.tvy4b7bnk {
  fill: currentColor;
  d: path("m12 2 4 4v11H8V6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zesrtccnv {
  d: path("M10 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="tvy4b7bnk"/><path class="bkhpo871l"/><path class="g7g9z5bnc"/><path class="zesrtccnv"/><path class="sc1yd0n6y"/><path class="c3v-iswgv"/><path class="qrqk-5btd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:rocket-duotone-regular"} {...others} />);
}

export default Component;
