import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f_d6gcbvr.css';
import '../../css/e/e82k79bum.css';
import '../../css/o/oix2qy57j.css';
import '../../css/e/eu5ukbiiu.css';
import '../../css/w/wotccxbib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f_d6gcbvr wm-k"/><path class="e82k79bum wm-a"/><path class="oix2qy57j wm-shadow"/><path class="eu5ukbiiu wm-a"/><path class="wm-k wotccxbib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-open-engrave"} {...others} />);
}

export default Component;
