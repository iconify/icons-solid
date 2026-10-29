import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v6mjv2pfr.css';
import '../../css/k/kbr7fzbsv.css';
import '../../css/k/kebgbt-gk.css';
import '../../css/x/xu_bh3b0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v6mjv2pfr wm-k"/><path class="kbr7fzbsv wm-k"/><path class="kebgbt-gk wm-k"/><path class="wm-a xu_bh3b0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:users-sketch"} {...others} />);
}

export default Component;
