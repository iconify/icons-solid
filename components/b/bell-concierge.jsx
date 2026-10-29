import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lalhlfhqy.css';
import '../../css/q/qayf4mb-o.css';
import '../../css/w/wn676nbst.css';
import '../../css/h/hiphvwbil.css';
import '../../css/v/v2kverboh.css';
import '../../css/z/zeiqy8bin.css';
import '../../css/m/mahon0bod.css';
import '../../css/r/r-jjztbnh.css';
import '../../css/u/ucqdu8byz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lalhlfhqy wm-shadow"/><path class="qayf4mb-o wm-k"/><path class="wm-k wn676nbst"/><path class="hiphvwbil wm-k"/><path class="v2kverboh wm-k"/><path class="wm-k zeiqy8bin"/><path class="mahon0bod wm-shine"/><path class="r-jjztbnh wm-a"/><path class="ucqdu8byz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:bell-concierge"} {...others} />);
}

export default Component;
