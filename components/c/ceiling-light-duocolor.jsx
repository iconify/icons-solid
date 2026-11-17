import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ea3r3s0yr {
  d: path("M3 16a9 9 0 0 1 18 0Zm9-13v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p0g9bbcsi {
  stroke-opacity: 0.4;
  d: path("M16 16a4 4 0 1 1-8 0");
}
</style><g class="nrj6p8qat"><path class="p0g9bbcsi"/><path class="ea3r3s0yr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ceiling-light-duocolor"} {...others} />);
}

export default Component;
