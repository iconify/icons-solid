import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mpg3hvb0k.css';
import '../../css/b/bfbs_7bah.css';
import '../../css/h/hh_45xbdi.css';
import '../../css/z/zyqzzubeh.css';
import '../../css/g/g8hx6db8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mpg3hvb0k"/><path class="bfbs_7bah wm-a"/><path class="hh_45xbdi wm-k"/><path class="wm-a zyqzzubeh"/><path class="g8hx6db8y wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:briefcase-business-sketch"} {...others} />);
}

export default Component;
