import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h152-nnyd {
  d: path("M13.75 2.75v5.5h5.5M2.75 14.5h10m-2.5-2.5l2.5 2.5l-2.5 2.5");
}

.ryq_8nn6w {
  d: path("M4.75 11.25v-8.5h9l5.5 5.5v13H4.75v-3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ryq_8nn6w"/><path class="h152-nnyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:file-import-sharp"} {...others} />);
}

export default Component;
