import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iy2vliimq {
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 0 0-10 0m2-4V3h6v5m-6 8v5h6v-5");
}

.mwg9_qb3b {
  stroke-opacity: 0.4;
  d: path("M12 10v2h2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mwg9_qb3b"/><path class="iy2vliimq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:watch-duocolor-sharp"} {...others} />);
}

export default Component;
