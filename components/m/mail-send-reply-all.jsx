import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kdr-e6yva.css';
import '../../css/l/ll1rs5_xj.css';
import '../../css/h/h-xuk081f.css';
import '../../css/t/twottnbxl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="kdr-e6yva"/><path class="ll1rs5_xj"/><path class="h-xuk081f"/><path class="twottnbxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mail-send-reply-all"} {...others} />);
}

export default Component;
