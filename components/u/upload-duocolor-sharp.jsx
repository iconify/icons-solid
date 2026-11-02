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

.riisj1nkm {
  stroke-opacity: 0.4;
  d: path("M6 20h12");
}

.s-207ebhv {
  d: path("m16 8l-4-4l-4 4m4-4v12");
}
</style><g class="nrj6p8qat"><path class="riisj1nkm"/><path class="s-207ebhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:upload-duocolor-sharp"} {...others} />);
}

export default Component;
