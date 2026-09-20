import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gq-eiyboc {
  fill: currentColor;
  d: path("M15 20v-2h4V6h-4V4h6v16zm-4 2v-2H3V4h8V2h2v20zm8-16v12z");
}
</style><path class="gq-eiyboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:split-scene-left-outline-sharp"} {...others} />);
}

export default Component;
