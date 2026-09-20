import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gljey2tgk {
  d: path("M2 6a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pqzdmxnfr {
  d: path("M10 13a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2Z");
}

.wf5lx0b1p {
  d: path("M18 8.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ygm75acdx {
  d: path("M19 2v3.5");
}
</style><g class="nrj6p8qat"><path class="gljey2tgk"/><path class="pqzdmxnfr"/><path class="ygm75acdx"/><path class="wf5lx0b1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:hotfix-outline-regular"} {...others} />);
}

export default Component;
