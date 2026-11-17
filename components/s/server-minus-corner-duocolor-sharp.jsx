import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n0uo4wbqj {
  d: path("M3 4h18v6H3Zm6 16H3v-6h6M7 7h.01M7 17h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pnd60nbcx {
  stroke-opacity: 0.4;
  d: path("M13 17h8");
}
</style><g class="nrj6p8qat"><path class="pnd60nbcx"/><path class="n0uo4wbqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:server-minus-corner-duocolor-sharp"} {...others} />);
}

export default Component;
