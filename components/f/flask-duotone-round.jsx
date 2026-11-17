import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a0s4n_b3v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 3v6l-4 8c-.919 1.838.162 4 2 4h8c1.838 0 2.919-2.162 2-4l-4-8V3M8 3h8M7 15h10");
}

.bv4um0byg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 15h10l1 2c.919 1.838-.162 4-2 4H8c-1.838 0-2.919-2.162-2-4Z");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="bv4um0byg"/><path class="a0s4n_b3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flask-duotone-round"} {...others} />);
}

export default Component;
