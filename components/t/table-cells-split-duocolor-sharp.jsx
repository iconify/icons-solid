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

.w7a-3c9dz {
  stroke-opacity: 0.4;
  d: path("M12 9v6");
}

.zgxuderfk {
  d: path("M4 4h16v16H4Zm0 5h16M4 15h16");
}
</style><g class="nrj6p8qat"><path class="w7a-3c9dz"/><path class="zgxuderfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-cells-split-duocolor-sharp"} {...others} />);
}

export default Component;
