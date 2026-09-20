import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgwm9obwk.css';
import '../../css/j/jsygb7bfs.css';
import '../../css/n/npgqhk_3m.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="vgwm9obwk"/><path class="jsygb7bfs"/><path class="npgqhk_3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:neurology"} {...others} />);
}

export default Component;
