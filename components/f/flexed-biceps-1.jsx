import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvgdpzb2e.css';
import '../../css/z/zhyezzbvc.css';
import '../../css/q/q_ar9wbjj.css';
import '../../css/x/x0xfcvitb.css';
import '../../css/f/f9z5qtbuu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yvgdpzb2e"/><path class="zhyezzbvc"/><path class="q_ar9wbjj"/><path class="x0xfcvitb"/><path class="f9z5qtbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:flexed-biceps-1"} {...others} />);
}

export default Component;
