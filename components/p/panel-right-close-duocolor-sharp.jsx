import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fx3dyzbmz {
  d: path("M4 4h16v16H4Zm11 0v16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s6b_nxbdr {
  stroke-opacity: 0.4;
  d: path("m8 15l3-3l-3-3");
}
</style><g class="nrj6p8qat"><path class="s6b_nxbdr"/><path class="fx3dyzbmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:panel-right-close-duocolor-sharp"} {...others} />);
}

export default Component;
