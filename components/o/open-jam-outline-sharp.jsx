import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sk4x_jshq {
  fill: currentColor;
  d: path("M6 21h12v-2h-5v-7.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6V19H6zm-4-5V3h20v13h-7v-2h5V5H4v9h5v2z");
}
</style><path class="sk4x_jshq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:open-jam-outline-sharp"} {...others} />);
}

export default Component;
