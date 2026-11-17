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

.s2ks1pb2d {
  stroke-opacity: 0.4;
  d: path("M8 9h.01M12 9h.01M16 9h.01M10 14h.01M14 14h.01");
}

.u4dmoybaq {
  d: path("M6 5h12A8.485 8.485 0 1 1 6 5");
}
</style><g class="nrj6p8qat"><path class="s2ks1pb2d"/><path class="u4dmoybaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ev-plug-duocolor-sharp"} {...others} />);
}

export default Component;
