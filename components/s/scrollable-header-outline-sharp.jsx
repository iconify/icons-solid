import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ee9ckpb8r {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14v-5.384H5zm0-6.384h14V5H5zm0 0V5z");
}
</style><path class="ee9ckpb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:scrollable-header-outline-sharp"} {...others} />);
}

export default Component;
