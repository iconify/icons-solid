import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ig1csrbwl {
  fill: currentColor;
  d: path("M9 17h6v-2h-4v-2h4v-2h-4V9h4V7H9zm-6 4V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="ig1csrbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:explicit-outline-sharp"} {...others} />);
}

export default Component;
