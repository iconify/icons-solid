import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iu5e7sbjl {
  fill: currentColor;
  d: path("M21 21H3V3h18zm-8-8v6h6v-6zm0-2h6V5h-6zm-2 0V5H5v6zm0 2H5v6h6z");
}
</style><path class="iu5e7sbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:window-outline-sharp"} {...others} />);
}

export default Component;
