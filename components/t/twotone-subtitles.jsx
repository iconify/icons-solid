import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b5y5erbyq {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z");
}

.pga7ir71c {
  fill: currentColor;
  d: path("M4 18h16V6H4zm14-2h-2v-2h2zm-8-6h8v2h-8zm-4 0h2v2H6zm0 4h8v2H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="pga7ir71c"/><path class="b5y5erbyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-subtitles"} {...others} />);
}

export default Component;
