import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ar_34-ots {
  fill: currentColor;
  d: path("M5 19H4l-.65-2H2v-7h2V5h16v5h2v7h-1.35L20 19h-1l-.65-2H5.65zm8-9h5V7h-5zm-7 0h5V7H6z");
}
</style><path class="ar_34-ots"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:king-bed-sharp"} {...others} />);
}

export default Component;
