import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oki0kgbgl.css';
import '../../css/p/ps8kazbek.css';
import '../../css/v/v8iw7kk7g.css';
import '../../css/d/dz6u_wb8z.css';
import '../../css/j/j23ko_e6k.css';
import '../../css/t/tsaqe3ydm.css';
import '../../css/z/z04drlb1l.css';
import '../../css/c/c9nxxk3im.css';
import '../../css/x/xq4d1abaq.css';
import '../../css/v/v3vi-acyn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="oki0kgbgl"/><path class="ps8kazbek"/><path class="v8iw7kk7g"/><path class="dz6u_wb8z"/><path class="j23ko_e6k"/><path class="tsaqe3ydm"/><g class="z04drlb1l"><path class="c9nxxk3im"/><path class="xq4d1abaq"/><path class="v3vi-acyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:authority-building"} {...others} />);
}

export default Component;
