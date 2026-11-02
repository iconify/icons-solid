import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.qdyw2jb_l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9c0-3.314 4.03-6 9-6s9 2.686 9 6zm0 8h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm1-4h16");
}

.tbxgiabib {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 9H3c0-3.314 4.029-6 9-6s9 2.686 9 6m0 10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2h18Z");
}
</style><g class="ft5dv1b6b"><path class="tbxgiabib"/><path class="qdyw2jb_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:burger-duotone-round"} {...others} />);
}

export default Component;
