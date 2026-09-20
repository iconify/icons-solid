import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qzbi0lb_g {
  fill: currentColor;
  d: path("M4 19V5h5.116v14zm7.5 2V3h1v2H20v14h-7.5v2z");
}
</style><path class="qzbi0lb_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:split-scene-sharp"} {...others} />);
}

export default Component;
