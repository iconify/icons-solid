import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n1oi4j7xe {
  d: path("m7 18l6-6l-6-6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zpm2iyb0f {
  stroke-opacity: 0.4;
  d: path("M17 6v12");
}
</style><g class="nrj6p8qat"><path class="zpm2iyb0f"/><path class="n1oi4j7xe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chevron-right-to-line-duocolor-round"} {...others} />);
}

export default Component;
