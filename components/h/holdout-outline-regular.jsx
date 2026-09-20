import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dj91tzban {
  d: path("M6 17h8");
}

.e-07m9b9c {
  d: path("M6 11h12");
}

.f8gsx7b5s {
  d: path("M6 8h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yih0nfb7c {
  d: path("M3 14h18");
}

.zrwkhybyf {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="zrwkhybyf"/><path class="yih0nfb7c"/><path class="f8gsx7b5s"/><path class="e-07m9b9c"/><path class="dj91tzban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:holdout-outline-regular"} {...others} />);
}

export default Component;
