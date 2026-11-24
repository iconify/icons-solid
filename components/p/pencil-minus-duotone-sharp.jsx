import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bawsitb1y {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 20v-3L16 7l3 3L9 20zm8-11l3 3M4 7h6");
}

.ft5dv1b6b {
  fill: none;
}

.nf2nfacxc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 17L16 7l3 3L9 20H6Z");
}
</style><g class="ft5dv1b6b"><path class="nf2nfacxc"/><path class="bawsitb1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pencil-minus-duotone-sharp"} {...others} />);
}

export default Component;
