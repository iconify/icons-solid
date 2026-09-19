import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.noujdrb6x {
  fill: currentColor;
  d: path("M7 5v4H4V5zm13 0v4h-3V5zm0 10v4h-3v-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.z_wlh8r9v {
  fill: currentColor;
  d: path("M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3zM7 9H4V5h3zm10 6h3v4h-3zm0-10h3v4h-3z");
}
</style><path class="z_wlh8r9v"/><path class="noujdrb6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-account-tree"} {...others} />);
}

export default Component;
