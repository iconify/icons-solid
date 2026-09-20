import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u9dz09yvh {
  fill: currentColor;
  d: path("M3 20V4h6v2H5v12h4v2zm8 2V2h2v2h8v16h-8v2zm-6-4V6z");
}
</style><path class="u9dz09yvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:split-scene-right-outline-sharp"} {...others} />);
}

export default Component;
