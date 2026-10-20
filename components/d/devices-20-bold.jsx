import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hztmhvb9w.css';
import '../../css/a/azeatlbry.css';
import '../../css/f/f0qyam6hq.css';
import '../../css/r/ryoi2p8la.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hztmhvb9w"/><path class="azeatlbry"/><path class="f0qyam6hq"/><path class="ryoi2p8la"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:devices-20-bold"} {...others} />);
}

export default Component;
