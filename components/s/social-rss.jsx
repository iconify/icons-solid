import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnycbel7f.css';
import '../../css/v/vxg7h7uod.css';
import '../../css/p/poohdx77y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rnycbel7f"/><path class="vxg7h7uod"/><path class="poohdx77y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-rss"} {...others} />);
}

export default Component;
