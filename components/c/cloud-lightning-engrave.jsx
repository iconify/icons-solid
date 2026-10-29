import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uwcumyhae.css';
import '../../css/y/yom66_bex.css';
import '../../css/g/gyp3yfelf.css';
import '../../css/z/zw-eze2dk.css';
import '../../css/n/njw_l-mjw.css';
import '../../css/e/evowombkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uwcumyhae wm-k"/><path class="wm-shadow yom66_bex"/><path class="gyp3yfelf wm-k"/><path class="wm-a zw-eze2dk"/><path class="njw_l-mjw wm-a"/><path class="evowombkz wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-lightning-engrave"} {...others} />);
}

export default Component;
