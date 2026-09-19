import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7s2wmxip {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zm-9-4h2v2h-2zm0-6h2v4h-2z");
}

.risb1mboy {
  fill: currentColor;
  d: path("M4 17.17L5.17 16H20V4H4zM11 6h2v4h-2zm0 6h2v2h-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="risb1mboy"/><path class="h7s2wmxip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-feedback"} {...others} />);
}

export default Component;
