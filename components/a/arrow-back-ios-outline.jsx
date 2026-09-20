import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qewjwhb9y {
  fill: currentColor;
  d: path("M10 21.308L.692 12L10 2.692l1.064 1.064L2.819 12l8.244 8.244z");
}
</style><path class="qewjwhb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-back-ios-outline"} {...others} />);
}

export default Component;
