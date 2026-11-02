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

.p6m030wqg {
  d: path("M4 9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm4-6h10a2 2 0 0 1 2 2v12");
}

.uhve_kb3h {
  stroke-opacity: 0.4;
  d: path("m10 11l2 3l-2 3l-2-3Z");
}
</style><g class="nrj6p8qat"><path class="uhve_kb3h"/><path class="p6m030wqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:playing-cards-duocolor"} {...others} />);
}

export default Component;
