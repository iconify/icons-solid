import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bwrecrsdv {
  d: path("M15 14h4");
}

.dm6j51bgi {
  d: path("m16 11 3 3 -3 3");
}

.h4mbgmbqx {
  d: path("M12 2H5v16h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v04-rubun {
  d: path("M14 4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="h4mbgmbqx"/><path class="bwrecrsdv"/><path class="dm6j51bgi"/><path class="v04-rubun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:document-parse-outline-regular"} {...others} />);
}

export default Component;
