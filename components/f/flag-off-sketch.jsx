import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gh7sr-ckp.css';
import '../../css/o/oehwwnupy.css';
import '../../css/l/lfxcs7bku.css';
import '../../css/f/fff13y99r.css';
import '../../css/v/v4qmalyzf.css';
import '../../css/y/yp5vjxbhh.css';
import '../../css/u/uqxrzxb_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gh7sr-ckp"/><path class="oehwwnupy wm-k"/><path class="lfxcs7bku wm-a"/><path class="fff13y99r wm-s"/><path class="v4qmalyzf wm-k"/><path class="wm-a yp5vjxbhh"/><path class="uqxrzxb_b wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flag-off-sketch"} {...others} />);
}

export default Component;
