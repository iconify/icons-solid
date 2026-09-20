import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dk1qlbbeh {
  fill: currentColor;
  d: path("m9.5 15.5l7-4.5l-7-4.5zM8 21v-2H2V3h20v16h-6v2zm-4-4h16V5H4zm0 0V5z");
}
</style><path class="dk1qlbbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:live-tv-outline-sharp"} {...others} />);
}

export default Component;
