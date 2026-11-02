import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h_-ca_wee {
  fill: currentColor;
  d: path("M5.414 8H19a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-8a1 1 0 0 1 0-2h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H5.414l2.293 2.293a.999.999 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a.999.999 0 1 1 1.414 1.414Z");
}
</style><path class="h_-ca_wee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:reply-fill"} {...others} />);
}

export default Component;
