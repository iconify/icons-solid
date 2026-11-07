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

.o5i5576um {
  stroke-opacity: 0.4;
  d: path("m6 18l2-2m-5-4h3m0-6l2 2");
}

.p08hivbcy {
  d: path("M12 3v3m6 0l-2 2m5 4h-3m0 6l-2-2m-4 5v-3");
}
</style><g class="nrj6p8qat"><path class="o5i5576um"/><path class="p08hivbcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:spinner-rays-duocolor-round"} {...others} />);
}

export default Component;
