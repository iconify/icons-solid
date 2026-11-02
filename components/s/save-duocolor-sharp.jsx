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

.q38rixd8d {
  d: path("M3 3h14l4 4v14H3zm4 18v-7h10v7");
}

.wn8i1hruc {
  stroke-opacity: 0.4;
  d: path("M9 7h6");
}
</style><g class="nrj6p8qat"><path class="wn8i1hruc"/><path class="q38rixd8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:save-duocolor-sharp"} {...others} />);
}

export default Component;
