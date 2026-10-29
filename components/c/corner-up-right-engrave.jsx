import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i53j-vblo.css';
import '../../css/n/nij4fkuoc.css';
import '../../css/t/tcx9a37pv.css';
import '../../css/k/ko9c-gbhs.css';
import '../../css/r/rakss8bxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i53j-vblo wm-k"/><path class="nij4fkuoc wm-a"/><path class="tcx9a37pv wm-shadow"/><path class="ko9c-gbhs wm-k"/><path class="rakss8bxv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:corner-up-right-engrave"} {...others} />);
}

export default Component;
