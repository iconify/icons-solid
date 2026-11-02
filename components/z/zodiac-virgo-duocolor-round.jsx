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

.u3i-esblo {
  stroke-opacity: 0.4;
  d: path("M14 15a6 6 0 0 0 6 6m-6-8a3 3 0 0 1 6 0v2a6 6 0 0 1-6 6");
}

.xlg6vbbdi {
  d: path("M4 3a2 2 0 0 1 2 2v10M6 5a2 2 0 1 1 4 0v10m0-10a2 2 0 1 1 4 0v10");
}
</style><g class="nrj6p8qat"><path class="u3i-esblo"/><path class="xlg6vbbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zodiac-virgo-duocolor-round"} {...others} />);
}

export default Component;
