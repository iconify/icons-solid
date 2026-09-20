import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.liivd0vpq {
  fill: currentColor;
  d: path("M15 20V9H9.5V4H20v16zm-5.5 0V10H14v10zM4 20V10h4.5v10z");
}
</style><path class="liivd0vpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:responsive-layout-sharp"} {...others} />);
}

export default Component;
