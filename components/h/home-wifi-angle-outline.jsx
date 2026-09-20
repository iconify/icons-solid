import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voay2fb_x.css';
import '../../css/r/r4pjpcbzy.css';
import '../../css/h/h5aevgb_l.css';
import '../../css/g/g-sabdtpw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="voay2fb_x"/><path class="r4pjpcbzy"/><path class="h5aevgb_l"/><path clip-rule="evenodd" class="g-sabdtpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-wifi-angle-outline"} {...others} />);
}

export default Component;
