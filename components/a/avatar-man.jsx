import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wnv1p6b-u.css';
import '../../css/d/dgej56smc.css';
import '../../css/d/d0yprjnmi.css';
import '../../css/x/x0val9bto.css';
import '../../css/n/nx76p1bke.css';
import '../../css/h/h36rc99po.css';
import '../../css/w/wk4d8wbwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow wnv1p6b-u"/><path class="dgej56smc"/><path class="d0yprjnmi"/><path class="x0val9bto"/><path class="nx76p1bke"/><path class="h36rc99po"/><path class="wk4d8wbwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-man"} {...others} />);
}

export default Component;
