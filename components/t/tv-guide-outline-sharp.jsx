import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mku8rtb_t {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5H5zm0 0V5zm3-3h2v-6h1.75L14 16h2l3-8h-2.5L15 12.5L13.5 8H5v2h3z");
}
</style><path class="mku8rtb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tv-guide-outline-sharp"} {...others} />);
}

export default Component;
