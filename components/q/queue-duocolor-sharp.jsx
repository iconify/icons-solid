import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bsige7bzw {
  d: path("M3 3h8v6H3Zm0 12h8v6H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sloak6mhm {
  stroke-opacity: 0.4;
  d: path("M18 3v18m-3-3l3 3l3-3");
}
</style><g class="nrj6p8qat"><path class="sloak6mhm"/><path class="bsige7bzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:queue-duocolor-sharp"} {...others} />);
}

export default Component;
