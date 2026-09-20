import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j9ldb98hx {
  fill: currentColor;
  d: path("M4 20V4h16v16zm8-1h7V5h-7z");
}
</style><path class="j9ldb98hx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:side-navigation-outline-sharp"} {...others} />);
}

export default Component;
