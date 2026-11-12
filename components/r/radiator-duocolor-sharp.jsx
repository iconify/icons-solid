import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l0yu7ebpb {
  stroke-opacity: 0.4;
  d: path("M3 8h16M5 16h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r0j1czo7j {
  d: path("M4 3h2v18H4Zm7 0h2v18h-2Zm7 0h2v18h-2Z");
}
</style><g class="nrj6p8qat"><path class="l0yu7ebpb"/><path class="r0j1czo7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:radiator-duocolor-sharp"} {...others} />);
}

export default Component;
