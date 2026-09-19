import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.otm-6-ouq {
  fill: currentColor;
  d: path("M8 18H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.yxpl29b3q {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M8 18H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4z");
}
</style><path class="otm-6-ouq"/><path class="yxpl29b3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-view-week"} {...others} />);
}

export default Component;
