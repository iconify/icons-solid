import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.erpvbebac {
  d: path("m9 7l3 3l3-3m-3 3V3m3 14l-3-3l-3 3m3-3v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r_lyfv-an {
  stroke-opacity: 0.4;
  d: path("M4 12h4m8 0h4");
}
</style><g class="nrj6p8qat"><path class="r_lyfv-an"/><path class="erpvbebac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fold-vertical-duocolor-sharp"} {...others} />);
}

export default Component;
