import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b2_xccbks {
  d: path("M13 6h8m-8 6h8m-8 6h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o8i27cbmn {
  stroke-opacity: 0.4;
  d: path("M6 4v16M9 7L6 4L3 7m0 10l3 3l3-3");
}
</style><g class="nrj6p8qat"><path class="o8i27cbmn"/><path class="b2_xccbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:line-height-duocolor"} {...others} />);
}

export default Component;
