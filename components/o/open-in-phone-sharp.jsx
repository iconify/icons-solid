import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.epqz-fb8m {
  fill: currentColor;
  d: path("M5 23v-8h2v3h10V6H7v3H5V1h14v22zm5-7l-1.4-1.4l1.55-1.6H2v-2h8.15L8.6 9.4L10 8l4 4z");
}
</style><path class="epqz-fb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:open-in-phone-sharp"} {...others} />);
}

export default Component;
