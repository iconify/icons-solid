import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v17-dzbpb {
  fill: currentColor;
  d: path("M3 19v-4.77h9.23V5H21v14zm0-5.058V7h6.942zm2.114-.711l6.117-6.117v6.117z");
}
</style><path class="v17-dzbpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:files-sharp"} {...others} />);
}

export default Component;
