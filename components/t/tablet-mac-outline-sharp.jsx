import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dne5ugbxs {
  fill: currentColor;
  d: path("M4 22V2h16v20zm1-4.461V21h14v-3.462zm0-1h14V5.5H5zM5 4.5h14V3H5zm0 0V3zm0 13.039V21zm7.54 2.27q.23-.23.23-.54t-.23-.54q-.23-.229-.54-.229t-.54.23t-.23.54t.23.539t.54.23t.54-.23");
}
</style><path class="dne5ugbxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tablet-mac-outline-sharp"} {...others} />);
}

export default Component;
