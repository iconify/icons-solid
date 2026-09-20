import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dfvjg5biy {
  d: path("M11 6a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2Z");
}

.hmity-bzw {
  d: path("M6 9.5 8.5 12 6 14.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qo1-4gbes {
  d: path("M3 12h5.5");
}
</style><g class="nrj6p8qat"><path class="dfvjg5biy"/><path class="qo1-4gbes"/><path class="hmity-bzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:ingress-free-outline-regular"} {...others} />);
}

export default Component;
