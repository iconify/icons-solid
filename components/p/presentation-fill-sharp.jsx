import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_hkgwbti {
  fill: currentColor;
  d: path("M3 2h18a1 1 0 0 1 0 2h-1v12a1 1 0 0 1-1 1h-4.586l3.293 3.293a.999.999 0 1 1-1.414 1.414L12 17.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414L9.586 17H5a1 1 0 0 1-1-1V4H3a1 1 0 0 1 0-2m6.728 15h.654a1 1 0 0 0-.654 0m3.89 0h.654a1 1 0 0 0-.654 0");
}
</style><path class="g_hkgwbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:presentation-fill-sharp"} {...others} />);
}

export default Component;
