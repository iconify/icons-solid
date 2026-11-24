import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_vdeimer {
  stroke-opacity: 0.4;
  d: path("M9 11h6m-3-3v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qq7f_hbum {
  d: path("M12 3h8v18l-4-2l-4 2l-4-2l-4 2V3z");
}
</style><g class="nrj6p8qat"><path class="d_vdeimer"/><path class="qq7f_hbum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:receipt-plus-duocolor-sharp"} {...others} />);
}

export default Component;
