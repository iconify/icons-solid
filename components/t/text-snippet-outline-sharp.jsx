import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w0nigdm3h {
  fill: currentColor;
  d: path("M5 19h14V9.825L14.175 5H5zm-2 2V3h12l6 6v12zm4-4h10v-2H7zm0-4h10v-2H7zm0-4h7V7H7zM5 19V5z");
}
</style><path class="w0nigdm3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-snippet-outline-sharp"} {...others} />);
}

export default Component;
