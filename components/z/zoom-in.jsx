import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kqfwqdb1e.css';
import '../../css/z/zpi6f-bpl.css';
import '../../css/q/qogcv6q-p.css';
import '../../css/f/fnyewcbio.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="kqfwqdb1e"/><path class="zpi6f-bpl"/><path class="qogcv6q-p"/><path class="fnyewcbio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:zoom-in"} {...others} />);
}

export default Component;
