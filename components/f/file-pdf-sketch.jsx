import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cw41ftbat.css';
import '../../css/d/d-9pp_qrb.css';
import '../../css/t/tmmgayb5u.css';
import '../../css/g/gz2kprb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cw41ftbat"/><path class="d-9pp_qrb wm-a"/><path class="tmmgayb5u wm-k"/><path class="gz2kprb8a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-pdf-sketch"} {...others} />);
}

export default Component;
