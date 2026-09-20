import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h5mnlg7fd {
  fill: currentColor;
  d: path("M3 19V5h18v14zm10-9h7V6h-7z");
}
</style><path class="h5mnlg7fd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tab-sharp"} {...others} />);
}

export default Component;
