import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s1kh9sbks {
  fill: currentColor;
  d: path("m14.8 11.975l-1.425-1.425L16.95 6H8.825l-2-2H21.05zM19.775 22.6L14 16.825V20h-4v-7.175l-8.6-8.6L2.8 2.8l18.4 18.4zm-6.4-12.05");
}
</style><path class="s1kh9sbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-alt-off-outline-sharp"} {...others} />);
}

export default Component;
