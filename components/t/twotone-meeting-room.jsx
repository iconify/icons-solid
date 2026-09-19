import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mmgcuubvs {
  fill: currentColor;
  d: path("M7 19h6V5H7zm3-8h2v2h-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.n176x-mju {
  fill: currentColor;
  d: path("M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2zm-6 0H7V5h6zm-3-8h2v2h-2z");
}
</style><path class="mmgcuubvs"/><path class="n176x-mju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-meeting-room"} {...others} />);
}

export default Component;
