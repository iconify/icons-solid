import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.mr7hqq0qk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 3v6L5 19c-.46.919.081 2 1 2h12c.919 0 1.46-1.081 1-2L14 9V3M8 3h8M7 15h10");
}

.qlgewxbxx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 15h10l2 4c.459.919-.081 2-1 2H6c-.919 0-1.459-1.081-1-2Z");
}
</style><g class="ft5dv1b6b"><path class="qlgewxbxx"/><path class="mr7hqq0qk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flask-duotone"} {...others} />);
}

export default Component;
