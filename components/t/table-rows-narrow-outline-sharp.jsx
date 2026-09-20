import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l0uo3iprf {
  fill: currentColor;
  d: path("M5 15h14v-2H5zm0-4h14V9H5zm0-4h14V5H5zM3 21V3h18v18zm2-2h14v-2H5z");
}
</style><path class="l0uo3iprf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:table-rows-narrow-outline-sharp"} {...others} />);
}

export default Component;
