import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bqt_t9bbz.css';
import '../../css/i/ir-n7mb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bqt_t9bbz wm-k"/><path class="ir-n7mb5m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cricket-sketch"} {...others} />);
}

export default Component;
