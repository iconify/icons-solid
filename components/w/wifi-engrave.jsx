import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oyy_ozbcu.css';
import '../../css/d/dgd2b7dnc.css';
import '../../css/c/cvygwcb1l.css';
import '../../css/a/a5ognjdal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="oyy_ozbcu"/><path class="dgd2b7dnc wm-shadow"/><path class="cvygwcb1l"/><path class="a5ognjdal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wifi-engrave"} {...others} />);
}

export default Component;
