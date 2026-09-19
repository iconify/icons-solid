import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.np0ychbte {
  fill: currentColor;
  d: path("M7 15v2h10v-2zm-4 6h18v-2H3zm0-8h18v-2H3zm4-6v2h10V7zM3 3v2h18V3z");
}
</style><path class="np0ychbte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-format-align-center"} {...others} />);
}

export default Component;
