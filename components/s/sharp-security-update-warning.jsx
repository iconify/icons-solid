import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e41ip5b0d {
  fill: currentColor;
  d: path("M11 15h2v2h-2zm0-8h2v6h-2z");
}

.w89-xcbdt {
  fill: currentColor;
  d: path("M5.01 1v22H19V1zM17 18H7V6h10z");
}
</style><path class="e41ip5b0d"/><path class="w89-xcbdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-security-update-warning"} {...others} />);
}

export default Component;
