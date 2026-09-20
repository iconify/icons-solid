import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.td2hv8lfp {
  fill: currentColor;
  d: path("M3 23V1h18v22zm2-5v3h14v-3zm0-2h14V6H5zM5 4h14V3H5zm0 0V3zm0 14v3zm7.713 2.213Q13 19.925 13 19.5t-.288-.712T12 18.5t-.712.288T11 19.5t.288.713t.712.287t.713-.288");
}
</style><path class="td2hv8lfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tablet-mac-outline-sharp"} {...others} />);
}

export default Component;
