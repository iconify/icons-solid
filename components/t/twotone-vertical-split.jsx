import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ir-d8yxvf {
  fill: currentColor;
  d: path("M15 7h4v10h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.t3803is0m {
  fill: currentColor;
  d: path("M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5zm6 12h-4V7h4z");
}
</style><path class="ir-d8yxvf"/><path class="t3803is0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-vertical-split"} {...others} />);
}

export default Component;
