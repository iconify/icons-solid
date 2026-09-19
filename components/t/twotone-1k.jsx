import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bn6ebpb5p {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z");
}

.dw9wdnb0s {
  fill: currentColor;
  d: path("M8.5 15H10V9H7v1.5h1.5zm5-2.25L15.25 15H17l-2.25-3L17 9h-1.75l-1.75 2.25V9H12v6h1.5z");
}

.tsoojkbzk {
  fill: currentColor;
  d: path("M5 19h14V5H5zm7-10h1.5v2.25L15.25 9H17l-2.25 3L17 15h-1.75l-1.75-2.25V15H12zM7 9h3v6H8.5v-4.5H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="tsoojkbzk"/><path class="bn6ebpb5p"/><path class="dw9wdnb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-1k"} {...others} />);
}

export default Component;
