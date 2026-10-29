import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_hr8bvzy.css';
import '../../css/z/zoxmpcbsr.css';
import '../../css/f/fyq8nsbxo.css';
import '../../css/z/zyjmm0j3m.css';
import '../../css/g/gfgk-e-ux.css';
import '../../css/j/jrgw24bry.css';
import '../../css/z/zk1jslchh.css';
import '../../css/o/ocz28vaau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h_hr8bvzy wm-shadow"/><path class="wm-shadow zoxmpcbsr"/><path class="fyq8nsbxo"/><path class="zyjmm0j3m"/><path class="gfgk-e-ux"/><path class="jrgw24bry"/><path class="zk1jslchh"/><path class="ocz28vaau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:bread"} {...others} />);
}

export default Component;
