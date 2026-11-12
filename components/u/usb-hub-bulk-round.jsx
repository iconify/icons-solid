import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bnhh6jnob {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2ZM2 16a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.hkff2s1uq {
  d: path("M13 13a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm-4 3a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm8 0a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="bnhh6jnob"/><path class="hkff2s1uq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:usb-hub-bulk-round"} {...others} />);
}

export default Component;
