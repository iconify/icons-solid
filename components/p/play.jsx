import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/ttyx58b8p.css';
import '../../css/w/wd179sblu.css';
import '../../css/t/tbcqlw_dm.css';
import '../../css/y/yj738hauy.css';
import '../../css/d/d9_j61pyo.css';
import '../../css/d/drvys7b2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ttyx58b8p wm-shadow"/><path class="wd179sblu"/><path class="tbcqlw_dm"/><path class="yj738hauy"/><path class="d9_j61pyo"/><path class="drvys7b2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:play"} {...others} />);
}

export default Component;
