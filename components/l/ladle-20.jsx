import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwpdu4b2p.css';
import '../../css/x/xfd9_p-un.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cwpdu4b2p"/><path class="xfd9_p-un"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ladle-20"} {...others} />);
}

export default Component;
