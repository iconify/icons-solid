import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s66pmbhpy.css';
import '../../css/p/p7b-2ibws.css';
import '../../css/j/jmojjgcoj.css';
import '../../css/w/w74_pkbuu.css';
import '../../css/x/xye5qqb6j.css';
import '../../css/o/om2raabrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="s66pmbhpy wm-k"/><path class="p7b-2ibws wm-a"/><path class="jmojjgcoj wm-shadow"/><path class="w74_pkbuu wm-a"/><path class="wm-k xye5qqb6j"/><path class="om2raabrv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:audio-lines-engrave"} {...others} />);
}

export default Component;
