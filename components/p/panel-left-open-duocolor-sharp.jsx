import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mlo5-tbia {
  stroke-opacity: 0.4;
  d: path("m13 15l3-3l-3-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xef6vnl4d {
  d: path("M4 4h16v16H4Zm5 0v16");
}
</style><g class="nrj6p8qat"><path class="mlo5-tbia"/><path class="xef6vnl4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:panel-left-open-duocolor-sharp"} {...others} />);
}

export default Component;
