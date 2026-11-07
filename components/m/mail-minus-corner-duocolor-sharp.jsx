import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.epbcczbdi {
  d: path("M11 19H3V5h18v6M3 5l6 6h6l6-6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tk5lf8bih {
  stroke-opacity: 0.4;
  d: path("M15 17h6");
}
</style><g class="nrj6p8qat"><path class="tk5lf8bih"/><path class="epbcczbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mail-minus-corner-duocolor-sharp"} {...others} />);
}

export default Component;
