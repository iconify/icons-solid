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

.odsjhlbmu {
  d: path("M4 3h16v18H4Zm0 6h16M8 6h.01M11 6h.01");
}

.ogq_ynllt {
  stroke-opacity: 0.4;
  d: path("M8 13h8");
}
</style><g class="nrj6p8qat"><path class="ogq_ynllt"/><path class="odsjhlbmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dishwasher-duocolor-sharp"} {...others} />);
}

export default Component;
