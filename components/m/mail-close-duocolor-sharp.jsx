import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b4kmbcifq {
  stroke-opacity: 0.4;
  d: path("m16 4l4 4m0-4l-4 4");
}

.bsyq0zp1v {
  d: path("M21 13v6H3V5h8M3 5l6 6h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="b4kmbcifq"/><path class="bsyq0zp1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mail-close-duocolor-sharp"} {...others} />);
}

export default Component;
