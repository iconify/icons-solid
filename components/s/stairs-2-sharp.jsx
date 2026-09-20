import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.thrpz258i {
  fill: currentColor;
  d: path("M3 18v-1h5.664v-5.5h5.663V6H21v1h-5.663v5.5H9.673V18z");
}
</style><path class="thrpz258i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stairs-2-sharp"} {...others} />);
}

export default Component;
