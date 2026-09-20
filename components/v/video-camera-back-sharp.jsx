import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r4dn2jb5k {
  fill: currentColor;
  d: path("M5 16h10l-3.45-4.5l-2.3 3l-1.55-2zm-3 4V4h16v6.5l4-4v11l-4-4V20z");
}
</style><path class="r4dn2jb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-camera-back-sharp"} {...others} />);
}

export default Component;
