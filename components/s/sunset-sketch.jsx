import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nkg1agbyx.css';
import '../../css/g/gxqk5yt0t.css';
import '../../css/t/txnheqbrz.css';
import '../../css/l/l_1qa9brg.css';
import '../../css/d/duzqyrybg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nkg1agbyx wm-k"/><path class="gxqk5yt0t wm-s"/><path class="txnheqbrz wm-k"/><path class="l_1qa9brg wm-a"/><path class="duzqyrybg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sunset-sketch"} {...others} />);
}

export default Component;
