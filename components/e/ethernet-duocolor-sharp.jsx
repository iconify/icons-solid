import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gelqk848u {
  d: path("M3 4h18v13h-4v4H7v-4H3z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q6v94_xbf {
  stroke-opacity: 0.4;
  d: path("M6 8v3m4-3v3m4-3v3m4-3v3");
}
</style><g class="nrj6p8qat"><path class="q6v94_xbf"/><path class="gelqk848u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ethernet-duocolor-sharp"} {...others} />);
}

export default Component;
