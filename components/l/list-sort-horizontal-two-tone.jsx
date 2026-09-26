import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dpt_fmbqu {
  d: path("M6 13L6 21M12 13L12 21M18 13L18 21");
}

.ket4ybnle {
  stroke-opacity: 0.4;
  d: path("M10 6L3 6M6 3L3 6L6 9M14 6L21 6M18 3L21 6L18 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ket4ybnle"/><path class="dpt_fmbqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-sort-horizontal-two-tone"} {...others} />);
}

export default Component;
