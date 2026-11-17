import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6ixxrb7o {
  stroke-opacity: 0.4;
  d: path("M6 6a6.325 6.325 0 0 0 12 0m-6 5v4M3 9l3-3m12 0l3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.osfad-bid {
  d: path("M3 15h18M6 3v16M18 3v16");
}
</style><g class="nrj6p8qat"><path class="d6ixxrb7o"/><path class="osfad-bid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bridge-suspension-duocolor"} {...others} />);
}

export default Component;
