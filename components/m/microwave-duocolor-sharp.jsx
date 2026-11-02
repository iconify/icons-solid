import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fc3ud-bge {
  stroke-opacity: 0.4;
  d: path("M7 8h6v6H7Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.phakvlbgq {
  d: path("M3 4h18v14H3Zm4 14v2m10-2v2m0-12v6");
}
</style><g class="nrj6p8qat"><path class="fc3ud-bge"/><path class="phakvlbgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:microwave-duocolor-sharp"} {...others} />);
}

export default Component;
