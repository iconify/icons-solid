import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zzbsbp-2b {
  fill: currentColor;
  d: path("M12 15h1.5v-2.25L15.25 15h1.825l-2.325-3l2.325-3H15.25l-1.75 2.25V9H12zm-3.5 0H10V9H7v1.5h1.5zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="zzbsbp-2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:1k-outline-sharp"} {...others} />);
}

export default Component;
