import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iqteh8y2k {
  fill: currentColor;
  d: path("M4 5V4h16v1zm0 15V7.385h16V20z");
}
</style><path class="iqteh8y2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:page-header-sharp"} {...others} />);
}

export default Component;
