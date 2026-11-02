import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aiac4nlmv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l9 4H3zM3 21h18M6 11v6m4-6v6m4-6v6m4-6v6");
}

.ft5dv1b6b {
  fill: none;
}

.zh_iydb_v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 3l9 4H3Z");
}
</style><g class="ft5dv1b6b"><path class="zh_iydb_v"/><path class="aiac4nlmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bank-duotone-sharp"} {...others} />);
}

export default Component;
