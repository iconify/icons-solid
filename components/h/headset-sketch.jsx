import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mtqifvxek.css';
import '../../css/g/gq4bevilf.css';
import '../../css/n/ngbgmgbhh.css';
import '../../css/p/phoc4kb0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mtqifvxek"/><path class="gq4bevilf wm-a"/><path class="ngbgmgbhh wm-k"/><path class="phoc4kb0a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:headset-sketch"} {...others} />);
}

export default Component;
