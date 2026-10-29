import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f3r-8yyut.css';
import '../../css/a/att42bbkg.css';
import '../../css/j/j_vnhybnm.css';
import '../../css/r/rri6uechc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f3r-8yyut"/><path class="att42bbkg wm-shadow"/><path class="j_vnhybnm"/><path class="rri6uechc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thandai-engrave"} {...others} />);
}

export default Component;
