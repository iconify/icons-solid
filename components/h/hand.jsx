import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wzmg_abte.css';
import '../../css/w/wmipkrjrb.css';
import '../../css/i/ieoerkbwh.css';
import '../../css/t/taoua3o2d.css';
import '../../css/c/chowtevjo.css';
import '../../css/x/xwrla1u-w.css';
import '../../css/c/c25isgchq.css';
import '../../css/y/y9lp-s2bf.css';
import '../../css/n/n8vfk6_ek.css';
import '../../css/o/odkx88b_w.css';
import '../../css/i/ixxudf3ff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow wzmg_abte"/><path class="wm-shadow wmipkrjrb"/><path class="ieoerkbwh"/><path class="taoua3o2d"/><path class="chowtevjo"/><path class="xwrla1u-w"/><path class="c25isgchq wm-shine"/><path class="wm-shine y9lp-s2bf"/><path class="n8vfk6_ek"/><path class="odkx88b_w"/><path class="ixxudf3ff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:hand"} {...others} />);
}

export default Component;
