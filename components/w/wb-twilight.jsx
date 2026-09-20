import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sxsxtbbwk {
  fill: currentColor;
  d: path("m18.35 10.1l-1.4-1.45l2.15-2.1l1.4 1.4zM2 20v-2h20v2zm9-13V4h2v3zm-5.35 3.05L3.55 7.9l1.4-1.4L7.1 8.65zM5 16q0-2.925 2.038-4.962T12 9t4.963 2.038T19 16z");
}
</style><path class="sxsxtbbwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:wb-twilight"} {...others} />);
}

export default Component;
