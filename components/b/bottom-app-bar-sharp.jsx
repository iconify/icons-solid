import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oy93_mbgh {
  fill: currentColor;
  d: path("M3 21V3h18v18zm9.713-6.288Q13 14.425 13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15t.713-.288M5 14h4q0-1.25.875-2.125T12 11t2.125.875T15 14h4V5H5z");
}
</style><path class="oy93_mbgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bottom-app-bar-sharp"} {...others} />);
}

export default Component;
