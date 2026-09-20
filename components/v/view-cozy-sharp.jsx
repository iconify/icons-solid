import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.er16v3lvg {
  fill: currentColor;
  d: path("M4 10.5V4h6.5v6.5zM4 20v-6.5h6.5V20zm9.5-9.5V4H20v6.5zm0 9.5v-6.5H20V20z");
}
</style><path class="er16v3lvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-cozy-sharp"} {...others} />);
}

export default Component;
