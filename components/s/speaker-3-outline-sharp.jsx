import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b3ydiqi0s {
  fill: currentColor;
  d: path("M5.98 19H18V4H5.98zm2.712 2v-1H4.981V3H19v17h-3.73v1zM12 11.5");
}
</style><path class="b3ydiqi0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:speaker-3-outline-sharp"} {...others} />);
}

export default Component;
