import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c26ugccyd {
  stroke-opacity: 0.4;
  d: path("M9 3h6m-3 0v4M3 21h18");
}

.lv2h2ober {
  d: path("M3 7h18v10H3zm0 5h18M8 7v5m5-5v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="c26ugccyd"/><path class="lv2h2ober"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tram-side-duocolor-sharp"} {...others} />);
}

export default Component;
