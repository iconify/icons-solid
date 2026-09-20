import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x2-dmab_d {
  fill: currentColor;
  d: path("M8 14v-4h3.423L15 6.423v11.154L11.423 14z");
}
</style><path class="x2-dmab_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:volume-mute"} {...others} />);
}

export default Component;
