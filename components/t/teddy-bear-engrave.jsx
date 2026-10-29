import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gwygt9btv.css';
import '../../css/d/d_46y1bnq.css';
import '../../css/q/quetn71pl.css';
import '../../css/u/u90yf2b5z.css';
import '../../css/r/rz80qw0kw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gwygt9btv wm-k"/><path class="d_46y1bnq wm-a"/><path class="quetn71pl wm-shadow"/><path class="u90yf2b5z wm-k"/><path class="rz80qw0kw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:teddy-bear-engrave"} {...others} />);
}

export default Component;
