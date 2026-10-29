import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy-dx5bcj.css';
import '../../css/w/w--lsy53l.css';
import '../../css/d/d9j75lb-v.css';
import '../../css/x/xmrhhibfm.css';
import '../../css/m/mx9phzbcu.css';
import '../../css/a/any3irn2v.css';
import '../../css/p/pne3pub7v.css';
import '../../css/t/tdk8hby1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vy-dx5bcj wm-shadow"/><path class="w--lsy53l wm-k"/><path class="d9j75lb-v wm-k"/><path class="wm-k xmrhhibfm"/><path class="mx9phzbcu wm-k"/><path class="any3irn2v wm-k"/><path class="pne3pub7v wm-shine"/><path class="tdk8hby1b wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:basketball"} {...others} />);
}

export default Component;
