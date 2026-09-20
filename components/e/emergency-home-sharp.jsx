import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l6_9oeb8e {
  fill: currentColor;
  d: path("M11 13h2V7h-2zm1.713 2.713Q13 15.425 13 15t-.288-.712T12 14t-.712.288T11 15t.288.713T12 16t.713-.288M12 22.8L1.2 12L12 1.2L22.8 12z");
}
</style><path class="l6_9oeb8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:emergency-home-sharp"} {...others} />);
}

export default Component;
