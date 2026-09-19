import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.am437zbcu {
  fill: currentColor;
  d: path("M3 3v18h18V3zm11 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z");
}
</style><path class="am437zbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-article"} {...others} />);
}

export default Component;
