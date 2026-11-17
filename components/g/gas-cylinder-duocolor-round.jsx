import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cfhb2bcdc {
  stroke-opacity: 0.4;
  d: path("M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2");
}

.lhyysvc-c {
  d: path("M12 7h4a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4zM8 19v2h8v-2M4 13h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cfhb2bcdc"/><path class="lhyysvc-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:gas-cylinder-duocolor-round"} {...others} />);
}

export default Component;
