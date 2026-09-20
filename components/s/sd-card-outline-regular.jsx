import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ah0cuqn_g {
  d: path("M11 5v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q534om6ef {
  d: path("M14 8v4");
}

.qx4fzbhlz {
  d: path("M8 5v4");
}

.ut22q-b2l {
  d: path("M4 2h11l5 5v15H4Z");
}
</style><g class="nrj6p8qat"><path class="ut22q-b2l"/><path class="qx4fzbhlz"/><path class="ah0cuqn_g"/><path class="q534om6ef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:sd-card-outline-regular"} {...others} />);
}

export default Component;
