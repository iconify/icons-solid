import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lxluin9bm {
  fill: currentColor;
  d: path("M12.404 8.827v6.346L15.596 12zM9 19h10V5H9zm-5 1V4h16v16z");
}
</style><path class="lxluin9bm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:left-panel-open-sharp"} {...others} />);
}

export default Component;
