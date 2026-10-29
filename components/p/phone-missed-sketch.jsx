import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ae206tbtt.css';
import '../../css/c/cg-lnu7pb.css';
import '../../css/z/zrzjcwbuq.css';
import '../../css/q/q4pv1lb0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ae206tbtt"/><path class="cg-lnu7pb wm-s"/><path class="wm-k zrzjcwbuq"/><path class="q4pv1lb0v wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-missed-sketch"} {...others} />);
}

export default Component;
