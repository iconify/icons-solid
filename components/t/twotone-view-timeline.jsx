import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bn6ebpb5p {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z");
}

.fku3whdut {
  fill: currentColor;
  d: path("M6 15h6v2H6zm6-8h6v2h-6zm-3 4h6v2H9z");
}

.qj-2rnbdj {
  fill: currentColor;
  d: path("M5 19h14V5H5zm7-12h6v2h-6zm-3 4h6v2H9zm-3 4h6v2H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="qj-2rnbdj"/><path class="fku3whdut"/><path class="bn6ebpb5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-view-timeline"} {...others} />);
}

export default Component;
