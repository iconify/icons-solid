import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qcfo2qbfo {
  d: path("M16.75 6.1L19 4V11M16 11H22");
}

.r7pdf_baq {
  stroke-opacity: 0.4;
  d: path("M2 8L12 20M12 8L2 20");
}
</style><g class="nrj6p8qat"><path class="r7pdf_baq"/><path class="qcfo2qbfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:superscript-two-tone"} {...others} />);
}

export default Component;
