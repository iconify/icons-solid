import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtk-ex65l.css';
import '../../css/d/dfv5r_b1n.css';
import '../../css/b/bvzv8rigo.css';
import '../../css/l/llugxmmod.css';
import '../../css/c/cr_q34ikd.css';
import '../../css/y/yoy6tutic.css';
import '../../css/z/zt2f25bqz.css';
import '../../css/k/kv3hveb7w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jtk-ex65l"/><path class="dfv5r_b1n"/><path class="bvzv8rigo"/><path class="llugxmmod"/><path class="cr_q34ikd"/><path class="yoy6tutic"/><path class="zt2f25bqz"/><path class="kv3hveb7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:cable-car"} {...others} />);
}

export default Component;
