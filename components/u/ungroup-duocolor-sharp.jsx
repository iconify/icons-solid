import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dctk2rj5c {
  d: path("M5 5h7v5H5z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tv4vg2bhr {
  stroke-opacity: 0.4;
  d: path("M12 14h7v5h-7z");
}
</style><g class="nrj6p8qat"><path class="tv4vg2bhr"/><path class="dctk2rj5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ungroup-duocolor-sharp"} {...others} />);
}

export default Component;
