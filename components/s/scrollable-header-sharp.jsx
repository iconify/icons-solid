import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vu36vqbxp {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14v-5H5z");
}
</style><path class="vu36vqbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:scrollable-header-sharp"} {...others} />);
}

export default Component;
