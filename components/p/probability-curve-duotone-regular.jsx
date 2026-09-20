import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ex75cacie {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iv25mwztc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 14a8 8 0 0 1 16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k7ywiznno {
  d: path("M4 14a8 8 0 0 1 16 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="nrj6p8qat"><path class="iv25mwztc"/><path class="ex75cacie"/><path class="k7ywiznno"/><path class="xyj-l9cjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:probability-curve-duotone-regular"} {...others} />);
}

export default Component;
