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

.r-892qiye {
  d: path("M3 3h10v18H3Zm0 6h10");
}

.w_hd4bg-f {
  stroke-opacity: 0.4;
  d: path("M13 12h4v5h4V7l-3-3");
}
</style><g class="nrj6p8qat"><path class="w_hd4bg-f"/><path class="r-892qiye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fuel-duocolor-sharp"} {...others} />);
}

export default Component;
