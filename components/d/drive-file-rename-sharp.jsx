import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yc55fxgkb {
  fill: currentColor;
  d: path("M11.225 17H18v-2h-4.775zM6 17h3.075l7.575-7.55l-3.075-3.075L6 13.925zm7.575-6.6l-.95-.95l.95-.95l.925.925zM3 21V3h18v18z");
}
</style><path class="yc55fxgkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:drive-file-rename-sharp"} {...others} />);
}

export default Component;
