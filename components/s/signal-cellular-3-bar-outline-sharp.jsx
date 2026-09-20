import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z2wdg881i {
  fill: currentColor;
  d: path("M3 21L21 3v18zm11.289-1H20V5.427l-5.712 5.712z");
}
</style><path class="z2wdg881i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:signal-cellular-3-bar-outline-sharp"} {...others} />);
}

export default Component;
