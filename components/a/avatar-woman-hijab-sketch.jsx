import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h7rivybxz.css';
import '../../css/d/duqi2qd2c.css';
import '../../css/c/cejojzb_s.css';
import '../../css/w/wqu703b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="h7rivybxz wm-k"/><path class="duqi2qd2c wm-a"/><path class="cejojzb_s wm-k"/><path class="wm-a wqu703b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-hijab-sketch"} {...others} />);
}

export default Component;
