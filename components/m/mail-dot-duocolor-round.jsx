import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kwbihbtaz {
  d: path("M21 13v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ryszp1bmf {
  stroke-opacity: 0.4;
  d: path("m4 7l3 3c.64.64 1.72 1 3 1h3m2-5a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><g class="nrj6p8qat"><path class="ryszp1bmf"/><path class="kwbihbtaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mail-dot-duocolor-round"} {...others} />);
}

export default Component;
