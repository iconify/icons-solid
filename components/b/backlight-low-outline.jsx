import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p587xlb9j {
  fill: currentColor;
  d: path("M2 15v-2h3v2zm4.35-5.25L4.225 7.625l1.4-1.4L7.75 8.35zM7 18v-3h10v3zm4-11V4h2v3zm6.65 2.775l-1.4-1.425l2.125-2.125l1.4 1.425zM19 15v-2h3v2z");
}
</style><path class="p587xlb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:backlight-low-outline"} {...others} />);
}

export default Component;
