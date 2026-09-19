import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g8_0hfy_c {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM9 19H6V5h3zm4 0h-2V5h2zm5 0h-3V5h3z");
}

.lmzj5_e3a {
  fill: currentColor;
  d: path("M6 5h3v14H6zm9 0h3v14h-3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="lmzj5_e3a"/><path class="g8_0hfy_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-curtains-closed"} {...others} />);
}

export default Component;
