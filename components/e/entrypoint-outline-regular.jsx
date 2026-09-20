import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-pphqpeq {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.kktb2pbmr {
  d: path("M8.5 12.5H15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sfnyx4wnk {
  d: path("M6 6v14");
}

.skd4f3quy {
  d: path("m12.5 10 2.5 2.5 -2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="b-pphqpeq"/><path class="sfnyx4wnk"/><path class="kktb2pbmr"/><path class="skd4f3quy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:entrypoint-outline-regular"} {...others} />);
}

export default Component;
