import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iimoy0ris {
  fill: currentColor;
  d: path("M1 20V4h10v4H9V6H3v12h6v-2h2v4zm12 0v-4h2v2h2v2zm6 0v-2h2v-2h2v4zM13 8V4h4v2h-2v2zm8 0V6h-2V4h4v4zM3 18V6zm14-2l-1.4-1.4l1.575-1.6H6v-2h11.175L15.6 9.4L17 8l4 4z");
}
</style><path class="iimoy0ris"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:switch-access-2-outline-sharp"} {...others} />);
}

export default Component;
