import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wcry-ob_o {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-9h14V5H5zm0 2v5h14v-5zm0 0v5z");
}
</style><path class="wcry-ob_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bottom-sheets-outline-sharp"} {...others} />);
}

export default Component;
