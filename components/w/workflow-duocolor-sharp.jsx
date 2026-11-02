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

.qlk438mrc {
  d: path("M3 3h8v8H3Zm10 10h8v8h-8Z");
}

.t5lwdeoxd {
  stroke-opacity: 0.4;
  d: path("M7 11v6h6");
}
</style><g class="nrj6p8qat"><path class="t5lwdeoxd"/><path class="qlk438mrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:workflow-duocolor-sharp"} {...others} />);
}

export default Component;
