import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.boea9c97w {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-4.615h14V5H5zm0 1V19h14v-2.616zm0 0V19z");
}
</style><path class="boea9c97w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bottom-navigation-outline-sharp"} {...others} />);
}

export default Component;
