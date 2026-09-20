import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fnpnvqr1y {
  fill: currentColor;
  d: path("M3 21V3h2v18zm16 0V3h2v18zM7 13v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z");
}
</style><path class="fnpnvqr1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:fit-width-outline-sharp"} {...others} />);
}

export default Component;
