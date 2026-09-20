import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ovl4ztbsc {
  fill: currentColor;
  d: path("M10 19h9V5h-9zm-7 2V3h18v18z");
}
</style><path class="ovl4ztbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dock-to-right-sharp"} {...others} />);
}

export default Component;
