import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/pqh-q_bgz.css';
import '../../css/e/ehqj47bjc.css';
import '../../css/v/vr7ulcb1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="pqh-q_bgz"/><path class="ehqj47bjc"/><path class="vr7ulcb1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:citadel-outline"} {...others} />);
}

export default Component;
