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

.p3zn41bdm {
  d: path("M3 6h18M3 18h6");
}

.tgbev8bfa {
  stroke-opacity: 0.4;
  d: path("M13 18h.01M17 18h.01M21 18h-.01");
}
</style><g class="nrj6p8qat"><path class="tgbev8bfa"/><path class="p3zn41bdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-truncate-duocolor-sharp"} {...others} />);
}

export default Component;
