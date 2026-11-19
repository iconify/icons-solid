import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvfmnjb6v.css';
import '../../css/h/h1y4n0biy.css';
import '../../css/p/pxr9mrjbf.css';
import '../../css/j/j66xfzb6f.css';
import '../../css/y/ysssou8ru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xvfmnjb6v"/><path class="h1y4n0biy"/><path class="pxr9mrjbf"/><path class="j66xfzb6f"/><path class="ysssou8ru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-night"} {...others} />);
}

export default Component;
