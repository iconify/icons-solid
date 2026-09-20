import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gyt7kp80q {
  fill: currentColor;
  d: path("M15.423 19v-1H18V6h-2.577V5H19v14zM5 19V5h3.577v1H6v12h2.577v1z");
}
</style><path class="gyt7kp80q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:data-array-outline"} {...others} />);
}

export default Component;
