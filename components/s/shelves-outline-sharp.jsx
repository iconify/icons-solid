import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z_3gzwbwk {
  fill: currentColor;
  d: path("M3 23V1h2v2h14V1h2v22h-2v-2H5v2zm2-12h2V7h6v4h6V5H5zm0 8h6v-4h6v4h2v-6H5zm4-8h2V9H9zm4 8h2v-2h-2zm-4-8h2zm4 8h2z");
}
</style><path class="z_3gzwbwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shelves-outline-sharp"} {...others} />);
}

export default Component;
