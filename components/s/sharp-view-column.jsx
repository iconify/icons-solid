import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mi6f_gb_b {
  fill: currentColor;
  d: path("M14.67 5v14H9.33V5zm1 14H21V5h-5.33zm-7.34 0V5H3v14z");
}
</style><path class="mi6f_gb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-view-column"} {...others} />);
}

export default Component;
