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

.pslo_2blm {
  stroke-opacity: 0.4;
  d: path("M10 7V5a2 2 0 1 1 4 0v2M8 21v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3");
}

.suihrkb1c {
  d: path("M12 7h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4zm-4 4h8");
}
</style><g class="nrj6p8qat"><path class="pslo_2blm"/><path class="suihrkb1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:backpack-duocolor-round"} {...others} />);
}

export default Component;
