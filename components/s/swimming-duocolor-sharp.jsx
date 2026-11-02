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

.rys98qb6q {
  stroke-opacity: 0.4;
  d: path("M17 8a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}

.xa4_09bid {
  d: path("m5 11l5-3l4 3l-2 2m-9 4q3-3 6 0t6 0t6 0");
}
</style><g class="nrj6p8qat"><path class="rys98qb6q"/><path class="xa4_09bid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:swimming-duocolor-sharp"} {...others} />);
}

export default Component;
