import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xx69kabod {
  fill: currentColor;
  d: path("M3 16v-2h8v2zm0-4v-2h12v2zm0-4V6h12v2zm13 13v-8l6 4z");
}
</style><path class="xx69kabod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:playlist-play-outline-sharp"} {...others} />);
}

export default Component;
