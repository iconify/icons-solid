import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.miwb7-lcv {
  fill: currentColor;
  d: path("M6 13h9v-2H6zm0-3h9V8H6zM2 20V4h20v16z");
}
</style><path class="miwb7-lcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:featured-play-list-sharp"} {...others} />);
}

export default Component;
