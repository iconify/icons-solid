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

.o5md91utj {
  stroke-opacity: 0.4;
  d: path("M15 17a2 2 0 1 0 4 0a2 2 0 0 0-4 0m4 2l2 2");
}
</style><g class="nrj6p8qat"><path class="o5md91utj"/><path class="epbcczbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mail-search-corner-duocolor-sharp"} {...others} />);
}

export default Component;
