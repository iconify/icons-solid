import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bydkv6rsh {
  fill: currentColor;
  d: path("M4 21V9l8-6l8 6v2h-9v8h9v2zm8-3v-6h6v2l2-1.05v4.1L18 16v2z");
}
</style><path class="bydkv6rsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:camera-outdoor-sharp"} {...others} />);
}

export default Component;
