import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vpej1ibve {
  fill: currentColor;
  d: path("M256 128a15.76 15.76 0 0 1-7.33 13.34l-88.19 56.16A15.91 15.91 0 0 1 136 184.16v-37.3L56.48 197.5A15.91 15.91 0 0 1 32 184.16V71.84A15.91 15.91 0 0 1 56.48 58.5L136 109.14v-37.3a15.91 15.91 0 0 1 24.48-13.34l88.19 56.16A15.76 15.76 0 0 1 256 128");
}
</style><path class="vpej1ibve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:fast-forward-fill"} {...others} />);
}

export default Component;
