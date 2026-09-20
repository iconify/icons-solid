import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/ah1-71w6y.css';
import '../../css/e/eqa9_wbcm.css';
import '../../css/u/uj_c58bnb.css';
import '../../css/w/w-fhtw6wb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ah1-71w6y"/><path class="eqa9_wbcm"/><path class="uj_c58bnb"/><path class="w-fhtw6wb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:chat-bubble-oval-notification"} {...others} />);
}

export default Component;
