import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b6r623bpq.css';
import '../../css/w/wmfn8sbna.css';
import '../../css/e/ew51tmbbl.css';
import '../../css/c/cvqya5bkd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="b6r623bpq"/><path class="wm-k wmfn8sbna"/><path class="ew51tmbbl wm-k"/><path class="cvqya5bkd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:factory-sketch"} {...others} />);
}

export default Component;
