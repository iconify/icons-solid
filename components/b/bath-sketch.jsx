import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zxmf3xbzu.css';
import '../../css/o/oc_p2dhlj.css';
import '../../css/q/q3ad9d2ky.css';
import '../../css/z/ziso84b9n.css';
import '../../css/u/uxoz16zip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zxmf3xbzu"/><path class="oc_p2dhlj wm-k"/><path class="q3ad9d2ky wm-a"/><path class="wm-k ziso84b9n"/><path class="uxoz16zip wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bath-sketch"} {...others} />);
}

export default Component;
