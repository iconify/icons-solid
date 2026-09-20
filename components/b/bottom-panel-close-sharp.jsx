import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h_p9qs36a {
  fill: currentColor;
  d: path("m12 11.5l4-4H8zM5 14h14V5H5zm-2 7V3h18v18z");
}
</style><path class="h_p9qs36a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bottom-panel-close-sharp"} {...others} />);
}

export default Component;
