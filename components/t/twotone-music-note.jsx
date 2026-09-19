import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rbio7abts {
  fill: currentColor;
  d: path("m12 3l.01 10.55c-.59-.34-1.27-.55-2-.55a4.001 4.001 0 1 0 0 8c2.22 0 3.99-1.79 3.99-4V7h4V3zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2");
}

.voi8usfrq {
  cx: 10.01px;
  cy: 17px;
  r: 2px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><circle class="voi8usfrq"/><path class="rbio7abts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-music-note"} {...others} />);
}

export default Component;
