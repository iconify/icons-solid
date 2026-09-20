import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w_dgpuhxm {
  fill: currentColor;
  d: path("M20 14.212V6.846H6.77V3H21v11.212zM3 21V9.23h14.616V21z");
}
</style><path class="w_dgpuhxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:select-window-2-sharp"} {...others} />);
}

export default Component;
