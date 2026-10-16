import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdounc8nc.css';
import '../../css/i/il9s_hbni.css';
import '../../css/p/p5uqo6r1z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mdounc8nc"/><path class="il9s_hbni"/><path class="p5uqo6r1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:imbalance-20-bold"} {...others} />);
}

export default Component;
