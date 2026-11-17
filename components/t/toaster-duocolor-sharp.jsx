import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cvojz-b5q {
  stroke-opacity: 0.4;
  d: path("M6 9V5a2 2 0 1 1 4 0v4m4 0V5a2 2 0 1 1 4 0v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zypm1ubil {
  d: path("M3 9h18v12H3Zm14 4v4");
}
</style><g class="nrj6p8qat"><path class="cvojz-b5q"/><path class="zypm1ubil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:toaster-duocolor-sharp"} {...others} />);
}

export default Component;
