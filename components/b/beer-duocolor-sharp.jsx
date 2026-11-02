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

.p9dxmcbhl {
  stroke-opacity: 0.4;
  d: path("M4 9c-2.667-4 3.333-8 6-4c2.667-4 8.667 0 6 4z");
}

.wvu_xc8fx {
  d: path("M4 9v12h12V9m0 3h1a3 3 0 0 1 0 6h-1m-8-5v4m4-4v4");
}
</style><g class="nrj6p8qat"><path class="p9dxmcbhl"/><path class="wvu_xc8fx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:beer-duocolor-sharp"} {...others} />);
}

export default Component;
