import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ec2davsmu {
  fill: currentColor;
  d: path("M241.57 171.2L141.33 96l23.46-17.6A8 8 0 0 0 168 72a40 40 0 1 0-80 0a8 8 0 0 0 16 0a24 24 0 0 1 47.69-3.78l-28.35 21.27l-.28.21l-108.63 81.5A16 16 0 0 0 24 200h208a16 16 0 0 0 9.6-28.8ZM232 184H24l104-78z");
}
</style><path class="ec2davsmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:coat-hanger"} {...others} />);
}

export default Component;
