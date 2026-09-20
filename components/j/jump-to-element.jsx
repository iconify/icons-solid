import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kyhr49tie {
  fill: currentColor;
  d: path("M11.423 12.577v-3h1v2h2v1zm6.577 0v-1h2v-2h1v3zM11.423 6V3h3v1h-2v2zM20 6V4h-2V3h3v3zM3.708 21L3 20.292l6.715-6.715H4v-1h7.423V20h-1v-5.715z");
}
</style><path class="kyhr49tie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:jump-to-element"} {...others} />);
}

export default Component;
