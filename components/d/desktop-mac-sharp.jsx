import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y_15p-c5d {
  fill: currentColor;
  d: path("M8 21v-1l2-2H2V3h20v15h-8l2 2v1z");
}
</style><path class="y_15p-c5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:desktop-mac-sharp"} {...others} />);
}

export default Component;
