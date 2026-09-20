import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dy2ezbbqh {
  fill: currentColor;
  d: path("M5 21L3 9h18l-2 12zm4-6h6v-2H9zM5 8V6h14v2zm2-3V3h10v2z");
}
</style><path class="dy2ezbbqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:home-storage-sharp"} {...others} />);
}

export default Component;
