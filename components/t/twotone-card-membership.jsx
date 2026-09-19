import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dfedrtbjp {
  fill: currentColor;
  d: path("M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2l4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2m0 13H4v-2h16zm0-5H4V4h16z");
}

.g6hv5ub7d {
  fill: currentColor;
  d: path("M4 4h16v6H4zm0 9h16v2H4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="g6hv5ub7d"/><path class="dfedrtbjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-card-membership"} {...others} />);
}

export default Component;
