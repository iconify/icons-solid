import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ddms_zbxj.css';
import '../../css/y/y3sxjzb7g.css';
import '../../css/u/uyucbf20u.css';
import '../../css/c/cxtpsmbyy.css';
import '../../css/d/dytqkgxwu.css';
import '../../css/s/sjltoabwg.css';
import '../../css/t/tk9nhlbwg.css';
import '../../css/d/dtjh4nvwo.css';
import '../../css/f/fvzl57b8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ddms_zbxj wm-shadow"/><path class="wm-shadow y3sxjzb7g"/><path class="uyucbf20u"/><path class="cxtpsmbyy"/><path class="dytqkgxwu"/><path class="sjltoabwg"/><path class="tk9nhlbwg wm-shine"/><path class="dtjh4nvwo wm-shine"/><path class="fvzl57b8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:command"} {...others} />);
}

export default Component;
