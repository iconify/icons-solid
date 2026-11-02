import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0_52zbav {
  d: path("m3 6l6-3l6 3l6-3v15l-6 3l-6-3l-6 3z");
}

.cf8r2lbua {
  stroke-opacity: 0.4;
  d: path("M9 3v15m6-12v15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cf8r2lbua"/><path class="c0_52zbav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:map-duocolor-sharp"} {...others} />);
}

export default Component;
