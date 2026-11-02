import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cahe5o4vj {
  d: path("M4 7h16v14H4zm4 4h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.www2esbax {
  stroke-opacity: 0.4;
  d: path("M10 7V3h4v4M8 21v-5h8v5");
}
</style><g class="nrj6p8qat"><path class="www2esbax"/><path class="cahe5o4vj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:backpack-duocolor-sharp"} {...others} />);
}

export default Component;
