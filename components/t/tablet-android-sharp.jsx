import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lf3vm6b4r {
  fill: currentColor;
  d: path("M4 22V2h16v20zm6.23-2.346h3.54v-.77h-3.54zM5 16.538h14V5.5H5z");
}
</style><path class="lf3vm6b4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tablet-android-sharp"} {...others} />);
}

export default Component;
