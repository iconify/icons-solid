import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ghzgggx8v {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z");
}

.iia19nbcm {
  fill: currentColor;
  d: path("m4 18l2-2h14V4H4zm11-9h2v2h-2zm-4 0h2v2h-2zM7 9h2v2H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="iia19nbcm"/><path class="ghzgggx8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-textsms"} {...others} />);
}

export default Component;
