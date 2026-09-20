import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c5ilydb-b {
  fill: currentColor;
  d: path("M15 15.348L18.348 12L15 8.652L11.652 12zm0 1.421L10.73 12.5H3.078v-1h7.654L15 7.23L19.77 12zM15 12");
}
</style><path class="c5ilydb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-end-diamond-outline"} {...others} />);
}

export default Component;
