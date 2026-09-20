import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ruwspnbug {
  fill: currentColor;
  d: path("M3 22V4h3V2h2v2h8V2h2v2h3v7h-2v-1H5v10h7v2zm11 0v-3.075l6.575-6.55l3.075 3.05L17.075 22zm6.575-5.6l.925-.975l-.925-.925l-.95.95z");
}
</style><path class="ruwspnbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:edit-calendar-sharp"} {...others} />);
}

export default Component;
