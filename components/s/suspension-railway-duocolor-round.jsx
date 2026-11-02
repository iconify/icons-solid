import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ahy_qimtf {
  stroke-opacity: 0.4;
  d: path("M3 4h18M7 4v5m8-5v5");
}

.l9xhih88p {
  d: path("M12 20H5a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3h11l4 4v5a2 2 0 0 1-2 2zm-9-4h18M11 9v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ahy_qimtf"/><path class="l9xhih88p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:suspension-railway-duocolor-round"} {...others} />);
}

export default Component;
