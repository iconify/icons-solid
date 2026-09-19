import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.be625c6pp {
  fill: currentColor;
  d: path("M7 3h10v1H7zm0 17h10v1H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.i4dnfxb_d {
  fill: currentColor;
  d: path("M16 7H8v2h8z");
}

.lzk4-kbrd {
  fill: currentColor;
  d: path("M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7 4V3h10v1zm0 14V6h10v12zm0 3v-1h10v1z");
}
</style><path class="be625c6pp"/><path class="lzk4-kbrd"/><path class="i4dnfxb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-ad-units"} {...others} />);
}

export default Component;
