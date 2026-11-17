import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ajy7zz73r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 4v4H8v12H4V4Zm-7 17v-3l5-5l3 3l-5 5Z");
}

.ft5dv1b6b {
  fill: none;
}

.nnuwjxc-k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 20H4V4h16v4m-7 13v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="ajy7zz73r"/><path class="nnuwjxc-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:note-edit-corner-duotone-sharp"} {...others} />);
}

export default Component;
