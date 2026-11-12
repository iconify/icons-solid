import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ejac3b2_g {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 7l4-4h10v18H5zm5 0v3m3-3v3m3-3v3");
}

.ft5dv1b6b {
  fill: none;
}

.nwv-8qbpa {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8.293 2.293A1 1 0 0 1 9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7c0-.265.105-.52.293-.707Z");
}
</style><g class="ft5dv1b6b"><path class="nwv-8qbpa"/><path class="ejac3b2_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sd-card-duotone-sharp"} {...others} />);
}

export default Component;
