import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.utpm5bcmk {
  fill: currentColor;
  d: path("M5 21V3h14v18zm2.73-3.5h8.693l-2.74-3.654l-2.53 3.192l-1.605-1.925zM12 10.116l2-1.193l2 1.193V4h-4z");
}
</style><path class="utpm5bcmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:photo-album-sharp"} {...others} />);
}

export default Component;
