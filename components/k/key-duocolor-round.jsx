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

.o9v-03xhl {
  stroke-opacity: 0.4;
  d: path("m16 8l2 2m1-5l2 2");
}

.ykdrq7mgm {
  d: path("m12 12l9-9M3 16a5 5 0 1 0 10 0a5 5 0 0 0-10 0");
}
</style><g class="nrj6p8qat"><path class="o9v-03xhl"/><path class="ykdrq7mgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:key-duocolor-round"} {...others} />);
}

export default Component;
