import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qqg2ndtqi {
  fill: currentColor;
  d: path("M3 21L21 3v18zm13.789-1H20V5.427l-3.212 3.212z");
}
</style><path class="qqg2ndtqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:network-cell-sharp"} {...others} />);
}

export default Component;
