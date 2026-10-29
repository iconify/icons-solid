import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sui797a8q.css';
import '../../css/l/lvq0wrbag.css';
import '../../css/x/xm0x-pb6v.css';
import '../../css/n/nccywjbya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sui797a8q wm-k"/><path class="lvq0wrbag wm-a"/><path class="wm-k xm0x-pb6v"/><path class="nccywjbya wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-sketch"} {...others} />);
}

export default Component;
