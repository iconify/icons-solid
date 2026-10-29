import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pv92h6bei.css';
import '../../css/u/u9ozzachk.css';
import '../../css/h/h46be0bwu.css';
import '../../css/s/s48hxlbad.css';
import '../../css/f/f0ef3bb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pv92h6bei"/><path class="u9ozzachk wm-k"/><path class="h46be0bwu wm-a"/><path class="s48hxlbad wm-k"/><path class="f0ef3bb2k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-x-sketch"} {...others} />);
}

export default Component;
