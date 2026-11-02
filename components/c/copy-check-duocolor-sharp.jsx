import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fa94ixb2z {
  d: path("M7 3h14v14H7ZM3 9v12h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ps2grmsyv {
  stroke-opacity: 0.4;
  d: path("m11 10l2 2l4-4");
}
</style><g class="nrj6p8qat"><path class="ps2grmsyv"/><path class="fa94ixb2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:copy-check-duocolor-sharp"} {...others} />);
}

export default Component;
