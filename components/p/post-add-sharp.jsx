import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tiry-ghuj {
  fill: currentColor;
  d: path("M8 11V9h8v2zm0 3v-2h8v2zm0 3v-2h8v2zm9-8V7h-2V5h2V3h2v2h2v2h-2v2zM3 21V3h11v2H5v14h14v-9h2v11z");
}
</style><path class="tiry-ghuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:post-add-sharp"} {...others} />);
}

export default Component;
