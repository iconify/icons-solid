import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muygl9lui.css';
import '../../css/r/rg45nfbgg.css';
import '../../css/a/aaogj5ntx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="muygl9lui"/><path class="rg45nfbgg"/><path class="aaogj5ntx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-albums-outline"} {...others} />);
}

export default Component;
