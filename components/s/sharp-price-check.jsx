import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wriwe29ol {
  fill: currentColor;
  d: path("M11 8H6V6h5V4H8.5V3h-2v1H4v6h5v2H4v2h2.5v1h2v-1H11zm8.59 4.52l-5.66 5.65l-2.83-2.83l-1.41 1.42L13.93 21L21 13.93z");
}
</style><path class="wriwe29ol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-price-check"} {...others} />);
}

export default Component;
