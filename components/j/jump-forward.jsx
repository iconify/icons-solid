import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/j/jzzx7m_6o.css';
import '../../css/a/avwbqkbxp.css';
import '../../css/e/e8utxjb0v.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="jzzx7m_6o"/><path class="avwbqkbxp"/><path class="e8utxjb0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:jump-forward"} {...others} />);
}

export default Component;
