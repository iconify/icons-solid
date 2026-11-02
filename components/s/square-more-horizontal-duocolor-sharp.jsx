import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x-8uw3b-x {
  stroke-opacity: 0.4;
  d: path("M8 12h.01M12 12h.01M16 12h.01");
}
</style><g class="nrj6p8qat"><path class="x-8uw3b-x"/><path class="j_psw1y4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-more-horizontal-duocolor-sharp"} {...others} />);
}

export default Component;
