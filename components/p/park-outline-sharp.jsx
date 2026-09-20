import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ztkgmeb5x {
  fill: currentColor;
  d: path("M13.95 22h-3.9v-4H3l4-6H5l7-10l7 10h-2l4 6h-7.05zm-7.2-6h4h-1.9h6.3h-1.9h4zm0 0h10.5l-4-6h1.9L12 5.5L8.85 10h1.9z");
}
</style><path class="ztkgmeb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:park-outline-sharp"} {...others} />);
}

export default Component;
