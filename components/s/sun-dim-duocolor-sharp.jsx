import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fkdpf6eac {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}

.mzknavjcm {
  stroke-opacity: 0.4;
  d: path("M19 12h.01m-2.06 4.95h.01M12 19h.01m-4.96-2.05h.01M5 12h.01m2.04-4.95h.01M12 5h.01m4.94 2.05h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mzknavjcm"/><path class="fkdpf6eac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sun-dim-duocolor-sharp"} {...others} />);
}

export default Component;
