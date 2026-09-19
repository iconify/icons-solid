import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gu6nyabhk {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 18H4V6h1zm12 0H7V6h10zm3 0h-1V6h1z");
}

.h3cpuwblb {
  fill: currentColor;
  d: path("M7 6h10v12H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="h3cpuwblb"/><path class="gu6nyabhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-width-full"} {...others} />);
}

export default Component;
