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

.pk4z40bgl {
  d: path("M8 12H3v9h5m8-6h5v6h-5m-8 0V5h8v16z");
}

.tp-oq1upk {
  stroke-opacity: 0.4;
  d: path("m11 11l2-2v6");
}
</style><g class="nrj6p8qat"><path class="tp-oq1upk"/><path class="pk4z40bgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:podium-duocolor-sharp"} {...others} />);
}

export default Component;
