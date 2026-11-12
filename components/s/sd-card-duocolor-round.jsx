import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_b7v-hcy {
  d: path("M19 12v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8c0-.64.36-1.36 1-2l2-2c.64-.64 1.36-1 2-1h5a4 4 0 0 1 4 4z");
}

.kggl7bbex {
  stroke-opacity: 0.4;
  d: path("M10 7v3m3-3v3m3-3v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="kggl7bbex"/><path class="j_b7v-hcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sd-card-duocolor-round"} {...others} />);
}

export default Component;
