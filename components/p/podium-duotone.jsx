import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a71fe2bcd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14H8Z");
}

.ft5dv1b6b {
  fill: none;
}

.y0fa3zbni {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 12H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h3m8-6h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3m-8 0V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14zm3-10l2-2v6");
}
</style><g class="ft5dv1b6b"><path class="a71fe2bcd"/><path class="y0fa3zbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:podium-duotone"} {...others} />);
}

export default Component;
