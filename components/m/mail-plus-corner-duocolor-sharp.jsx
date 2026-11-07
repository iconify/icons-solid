import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.epbcczbdi {
  d: path("M11 19H3V5h18v6M3 5l6 6h6l6-6");
}

.h7-t2qbtf {
  stroke-opacity: 0.4;
  d: path("M15 18h6m-3-3v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="h7-t2qbtf"/><path class="epbcczbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mail-plus-corner-duocolor-sharp"} {...others} />);
}

export default Component;
