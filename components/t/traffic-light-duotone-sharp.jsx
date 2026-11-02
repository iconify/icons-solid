import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.hd7mo3eqk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 3h10v18H7Zm4 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}

.n06gsnbsc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 21V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1");
}
</style><g class="ft5dv1b6b"><path class="n06gsnbsc"/><path class="hd7mo3eqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:traffic-light-duotone-sharp"} {...others} />);
}

export default Component;
