import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rdwsmhbbt.css';
import '../../css/h/h-88fv_ot.css';
import '../../css/l/liwxtwofv.css';
import '../../css/z/za3dt0bho.css';
import '../../css/r/rcb7clbki.css';
import '../../css/k/k-k6k285a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rdwsmhbbt wm-k"/><path class="h-88fv_ot wm-a"/><path class="liwxtwofv wm-shadow"/><path class="wm-k za3dt0bho"/><path class="rcb7clbki wm-a"/><path class="k-k6k285a wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:video-plus-engrave"} {...others} />);
}

export default Component;
