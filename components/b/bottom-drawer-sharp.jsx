import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i_dgj4b5t {
  fill: currentColor;
  d: path("M3 21V3h18v18zM5 5v8.25L6.25 12h11.5L19 13.25V5z");
}
</style><path class="i_dgj4b5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bottom-drawer-sharp"} {...others} />);
}

export default Component;
