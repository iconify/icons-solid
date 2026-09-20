import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dm4zz-mvm {
  fill: currentColor;
  d: path("M21.104 22.53L17.573 19H3V5h2l1 1H4.573L1.881 3.308l.713-.714l19.223 19.223zM21 18.19l-5.496-5.497H19V7h-7.692v1.496L7.812 5H21z");
}
</style><path class="dm4zz-mvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:picture-in-picture-off-sharp"} {...others} />);
}

export default Component;
