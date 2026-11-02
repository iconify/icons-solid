import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lno0446aq {
  stroke-opacity: 0.4;
  d: path("M10 16h6m-7 4h2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q1dwl61-n {
  d: path("M3 4h18M6 8h12m-9 4h10");
}
</style><g class="nrj6p8qat"><path class="lno0446aq"/><path class="q1dwl61-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tornado-duocolor-sharp"} {...others} />);
}

export default Component;
