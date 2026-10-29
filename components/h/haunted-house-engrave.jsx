import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mq02_p3aa.css';
import '../../css/w/wnw0y5iao.css';
import '../../css/a/a5t7rsb-z.css';
import '../../css/s/sy79xabkg.css';
import '../../css/x/x87vs2buk.css';
import '../../css/t/tdyvq4bpl.css';
import '../../css/h/hsf36n9ar.css';
import '../../css/c/c5doie9nu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mq02_p3aa wm-k"/><path class="wm-a wnw0y5iao"/><path class="a5t7rsb-z wm-s"/><path class="sy79xabkg wm-shadow"/><path class="wm-k x87vs2buk"/><path class="tdyvq4bpl wm-k"/><path class="hsf36n9ar wm-a"/><path class="c5doie9nu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:haunted-house-engrave"} {...others} />);
}

export default Component;
