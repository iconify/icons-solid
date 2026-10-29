import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3raaguch.css';
import '../../css/u/ucy4am5fc.css';
import '../../css/z/z9ls-lbhr.css';
import '../../css/b/brou24w_x.css';
import '../../css/q/qtu8m3bzg.css';
import '../../css/f/fz267xb4n.css';
import '../../css/h/hzlc3elmr.css';
import '../../css/x/xu_9iwuid.css';
import '../../css/g/giw0d-b8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3raaguch wm-shadow"/><path class="ucy4am5fc wm-k"/><path class="wm-k z9ls-lbhr"/><path class="brou24w_x wm-k"/><path class="qtu8m3bzg wm-k"/><path class="fz267xb4n wm-k"/><path class="hzlc3elmr wm-shine"/><path class="wm-k xu_9iwuid"/><path class="giw0d-b8b wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:message-circle-question"} {...others} />);
}

export default Component;
