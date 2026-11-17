import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.j_zfe_bvx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 10h10a5 5 0 0 1-10 0");
}

.jj8_o7bzh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3h6c1.5 3.5 2 5.5 2 7a5 5 0 0 1-10 0c0-1.5.5-3.5 2-7m3 12v6m-4 0h8M7 10h10");
}
</style><g class="ft5dv1b6b"><path class="j_zfe_bvx"/><path class="jj8_o7bzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:wine-duotone-sharp"} {...others} />);
}

export default Component;
