import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h_zl3-l6h {
  fill: currentColor;
  d: path("M6 21v-2h5v-3H2V3h20v13h-9v3h5v2zm-2-7h16V5H4zm0 0V5z");
}
</style><path class="h_zl3-l6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:jamboard-kiosk-outline-sharp"} {...others} />);
}

export default Component;
