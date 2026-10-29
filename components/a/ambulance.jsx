import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwx567bcc.css';
import '../../css/u/u2xzfbbjm.css';
import '../../css/v/ve_snwe4r.css';
import '../../css/h/heg1_clwa.css';
import '../../css/k/keobttshl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a wwx567bcc"/><path class="u2xzfbbjm wm-a"/><path class="ve_snwe4r wm-a"/><path class="heg1_clwa wm-a"/><path class="keobttshl wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:ambulance"} {...others} />);
}

export default Component;
