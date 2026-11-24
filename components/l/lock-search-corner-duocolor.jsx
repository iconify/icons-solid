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

.ns2fljdev {
  d: path("M11 21H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M8 9V7a4 4 0 1 1 8 0v2");
}

.ozn_t7bmd {
  stroke-opacity: 0.4;
  d: path("M20 20a2.828 2.828 0 1 1-4-4a2.828 2.828 0 0 1 4 4m0 0l2 2");
}
</style><g class="nrj6p8qat"><path class="ozn_t7bmd"/><path class="ns2fljdev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-search-corner-duocolor"} {...others} />);
}

export default Component;
