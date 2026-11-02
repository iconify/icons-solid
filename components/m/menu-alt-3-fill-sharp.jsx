import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ahowc3_6y {
  fill: currentColor;
  d: path("M13 6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm6 5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm-6 5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z");
}
</style><path class="ahowc3_6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:menu-alt-3-fill-sharp"} {...others} />);
}

export default Component;
