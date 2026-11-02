import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i7pgc_e7m {
  fill: currentColor;
  d: path("M19 8a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm0 6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z");
}
</style><path class="i7pgc_e7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:menu-double-fill-sharp"} {...others} />);
}

export default Component;
