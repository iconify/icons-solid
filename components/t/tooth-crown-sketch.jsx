import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ae0h0ywtu.css';
import '../../css/k/k7nygkzdg.css';
import '../../css/a/ayydkbl3e.css';
import '../../css/m/mqno2ebsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ae0h0ywtu"/><path class="k7nygkzdg wm-a"/><path class="ayydkbl3e wm-k"/><path class="mqno2ebsq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tooth-crown-sketch"} {...others} />);
}

export default Component;
