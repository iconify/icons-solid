import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.byr2wcn0d {
  d: path("m12 2l10 18H2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x38s1tb0x {
  stroke-opacity: 0.4;
  d: path("m9 14l2 2l3-4");
}
</style><g class="nrj6p8qat"><path class="x38s1tb0x"/><path class="byr2wcn0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:triangle-check-duocolor-sharp"} {...others} />);
}

export default Component;
