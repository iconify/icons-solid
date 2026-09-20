import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rm9_1_hyj {
  d: path("M16 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.yok9qsxfg {
  d: path("M19 8v5");
}

.z7796cdhw {
  d: path("M3 12a3.5 3.5 0 0 1 7 0 3.5 3.5 0 0 1 7 0l-7 7Z");
}
</style><g class="nrj6p8qat"><path class="z7796cdhw"/><path class="yok9qsxfg"/><path class="rm9_1_hyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:wellness-check-outline-regular"} {...others} />);
}

export default Component;
