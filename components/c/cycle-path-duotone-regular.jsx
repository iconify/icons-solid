import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fgfidgb3m {
  fill: currentColor;
  d: path("M2.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.i--1v6y7j {
  d: path("m6 12 3 -3h6l3 3");
}

.kum2ffbcf {
  d: path("M2.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ok8xuubvg {
  d: path("M14.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.uygjzo8ls {
  fill: currentColor;
  d: path("M14.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yyr7ulb8d {
  d: path("M9 5v4");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="fgfidgb3m"/><path class="uygjzo8ls"/><path class="kum2ffbcf"/><path class="ok8xuubvg"/><path class="i--1v6y7j"/><path class="yyr7ulb8d"/><path class="z9ittvbis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:cycle-path-duotone-regular"} {...others} />);
}

export default Component;
