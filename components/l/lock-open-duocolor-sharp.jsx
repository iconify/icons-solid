import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.el_r1pbzl {
  d: path("M4 10h16v11H4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zlelvokby {
  stroke-opacity: 0.4;
  d: path("M9 10V6a3 3 0 0 1 6 0");
}
</style><g class="nrj6p8qat"><path class="zlelvokby"/><path class="el_r1pbzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-open-duocolor-sharp"} {...others} />);
}

export default Component;
