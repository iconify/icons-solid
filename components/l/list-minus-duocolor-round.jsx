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

.qn_u12b2i {
  d: path("M3 6h11M3 11h11M3 16h7");
}

.s1fz_26ri {
  stroke-opacity: 0.4;
  d: path("M15 15h6");
}
</style><g class="nrj6p8qat"><path class="s1fz_26ri"/><path class="qn_u12b2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-minus-duocolor-round"} {...others} />);
}

export default Component;
