import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uss4u8bil {
  fill: currentColor;
  d: path("M17.15 13H12v3h-2v-5h7.15L15.6 9.4L17 8l4 4l-4 4l-1.4-1.4zM5 23V1h14v6h-2V6H7v12h10v-1h2v6z");
}
</style><path class="uss4u8bil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:app-shortcut-sharp"} {...others} />);
}

export default Component;
