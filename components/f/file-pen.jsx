import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bnuizac6e.css';
import '../../css/q/qlmwacche.css';
import '../../css/t/tlq0l9bdb.css';
import '../../css/k/kbzu6cbvx.css';
import '../../css/u/u_2_f44kr.css';
import '../../css/t/tj_07-biy.css';
import '../../css/w/w8ihfcyep.css';
import '../../css/o/or1-nbbre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bnuizac6e wm-shadow"/><path class="qlmwacche wm-s"/><path class="tlq0l9bdb wm-shadow"/><path class="kbzu6cbvx"/><path class="u_2_f44kr"/><path class="tj_07-biy wm-s"/><path class="w8ihfcyep wm-s"/><path class="or1-nbbre wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:file-pen"} {...others} />);
}

export default Component;
