import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jwhui3bcp {
  fill: currentColor;
  d: path("M5 21v-2H1V4h22v15h-4v2zm-2-4h18V6H3zm2-2h14l-4.5-6l-3.5 4.5l-2.5-3zm-2 2V6z");
}
</style><path class="jwhui3bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:photo-frame-outline-sharp"} {...others} />);
}

export default Component;
