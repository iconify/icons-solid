import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k160uab_l {
  fill: currentColor;
  d: path("M5 21V3h14v18zm1-1h12V4h-2v6.116l-2-1.193l-2 1.193V4H6zm1.73-2.5h8.693l-2.74-3.654l-2.53 3.192l-1.605-1.925zM6 20V4zm6-9.885l2-1.192l2 1.192l-2-1.192z");
}
</style><path class="k160uab_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:photo-album-outline-sharp"} {...others} />);
}

export default Component;
