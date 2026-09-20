import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ldeak6hjb {
  fill: currentColor;
  d: path("M3 19V5h18v14zm7.325-8H19V7h-8.675zm5.35 6H19v-4h-3.325zm-5.35 0h3.35v-4h-3.35zM5 17h3.325V7H5z");
}
</style><path class="ldeak6hjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-quilt-outline-sharp"} {...others} />);
}

export default Component;
