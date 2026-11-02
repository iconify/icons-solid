import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ans0v58qv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m15.14 15.258l1.809 5.426a.999.999 0 0 1-1.396 1.21L12 20.118l-3.553 1.776a.999.999 0 0 1-1.396-1.21l1.809-5.426A7.003 7.003 0 0 1 12 2a7.002 7.002 0 0 1 3.14 13.258");
}

.ft5dv1b6b {
  fill: none;
}

.rq-27focr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9m8 6l2 6l-4-2l-4 2l2-6");
}
</style><g class="ft5dv1b6b"><path class="ans0v58qv"/><path class="rq-27focr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:award-duotone-sharp"} {...others} />);
}

export default Component;
