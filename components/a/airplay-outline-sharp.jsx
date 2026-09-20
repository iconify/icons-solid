import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e66204dyf {
  fill: currentColor;
  d: path("m6 21l6-6l6 6zm-4-2V3h20v16h-5v-2h3V5H4v12h3v2zm10-7");
}
</style><path class="e66204dyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:airplay-outline-sharp"} {...others} />);
}

export default Component;
