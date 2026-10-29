import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/okex9absk.css';
import '../../css/m/mte5nkbne.css';
import '../../css/t/tlpgutb5x.css';
import '../../css/v/vwzncsbmf.css';
import '../../css/z/zub4acc2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="okex9absk wm-k"/><path class="mte5nkbne wm-a"/><path class="tlpgutb5x wm-shadow"/><path class="vwzncsbmf wm-k"/><path class="wm-a zub4acc2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-right-close-engrave"} {...others} />);
}

export default Component;
