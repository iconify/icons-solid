import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.elx_9_pak {
  fill: currentColor;
  d: path("M4 9V3h16v6h-2V5H6v4zm0 12v-8H2v-2h20v2h-2v8zM6 5h12z");
}
</style><path class="elx_9_pak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:split-scene-down-outline-sharp"} {...others} />);
}

export default Component;
