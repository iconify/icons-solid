import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nqqqpab0e {
  stroke-opacity: 0.4;
  d: path("M9 3v6m6-6v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ol3jf_bij {
  d: path("M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 0 6H6a3 3 0 0 1-3-3m2 3v8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9m-9 12v-4a2 2 0 1 1 4 0v4");
}
</style><g class="nrj6p8qat"><path class="nqqqpab0e"/><path class="ol3jf_bij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:store-duocolor-round"} {...others} />);
}

export default Component;
