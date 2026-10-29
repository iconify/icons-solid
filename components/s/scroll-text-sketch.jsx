import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gnci-5bia.css';
import '../../css/y/yc6f2ibtn.css';
import '../../css/s/swrq_pkri.css';
import '../../css/k/k8lhefb8t.css';
import '../../css/i/iosp0x2su.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gnci-5bia"/><path class="wm-k yc6f2ibtn"/><path class="swrq_pkri wm-a"/><path class="k8lhefb8t wm-k"/><path class="iosp0x2su wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scroll-text-sketch"} {...others} />);
}

export default Component;
