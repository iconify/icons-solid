import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xp1k08cdt.css';
import '../../css/z/zp0xmmxkd.css';
import '../../css/w/wxjatbcgy.css';
import '../../css/n/n879rtbch.css';
import '../../css/r/rze47ib2l.css';
import '../../css/y/y3a2h-b5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xp1k08cdt"/><path class="zp0xmmxkd"/><path class="wxjatbcgy"/><path class="n879rtbch"/><path class="rze47ib2l"/><path class="y3a2h-b5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:disc"} {...others} />);
}

export default Component;
