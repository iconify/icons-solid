import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lcj8kjqvv {
  d: path("M7 6h6v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zm1 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2M3 21h18M6 17h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t0kd1md4b {
  stroke-opacity: 0.4;
  d: path("M14 21a6 6 0 0 0 6-6a5 5 0 0 0-5-5h-2");
}
</style><g class="nrj6p8qat"><path class="t0kd1md4b"/><path class="lcj8kjqvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:microscope-duocolor"} {...others} />);
}

export default Component;
