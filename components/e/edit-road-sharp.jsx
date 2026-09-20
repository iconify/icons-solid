import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ssx64zswu {
  fill: currentColor;
  d: path("M16 12.125V4h2v6.125zM4 20V4h2v16zm6-12V4h2v4zm0 6v-4h2v4zm0 6v-4h2v4zm4 0v-3.075l6.575-6.55l3.075 3.05L17.075 20zm6.575-5.6l.925-.975l-.925-.925l-.95.95z");
}
</style><path class="ssx64zswu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:edit-road-sharp"} {...others} />);
}

export default Component;
