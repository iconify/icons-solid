import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q23hrk4cv {
  fill: currentColor;
  d: path("M3 16v-2h7v2zm0-4v-2h11v2zm0-4V6h11v2zm13 12v-4h-4v-2h4v-4h2v4h4v2h-4v4z");
}
</style><path class="q23hrk4cv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:playlist-add-sharp"} {...others} />);
}

export default Component;
