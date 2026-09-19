import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vk51p2b_k {
  fill: currentColor;
  d: path("M5 5v14h14V5zm12 10.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.yl-m5bb0o {
  fill: currentColor;
  d: path("M19 19H5V5h14zM3 3v18h18V3zm14 12.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12z");
}
</style><path class="vk51p2b_k"/><path class="yl-m5bb0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-disabled-by-default"} {...others} />);
}

export default Component;
