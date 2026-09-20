import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.esuqixb-g {
  fill: currentColor;
  d: path("M4.5 1a.5.5 0 0 0-.5.5v5a4 4 0 0 0 3.5 3.97V14H6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H8.5v-3.53A4 4 0 0 0 12 6.5v-5a.5.5 0 0 0-.5-.5zM5 4V2h6v2zm5.733 2.303a2.75 2.75 0 0 1-2.177 2.39a.5.5 0 0 1-.202-.98a1.75 1.75 0 0 0 1.385-1.52a.5.5 0 0 1 .994.11");
}
</style><path class="esuqixb-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:drink-wine-16-filled"} {...others} />);
}

export default Component;
