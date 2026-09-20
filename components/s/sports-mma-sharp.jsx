import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.owk383bfb {
  fill: currentColor;
  d: path("M7 21v-4h10v4zm-1-5l-1-5.05V3h12v4h2v3.95L18 16zm2-6h6V7H8z");
}
</style><path class="owk383bfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sports-mma-sharp"} {...others} />);
}

export default Component;
