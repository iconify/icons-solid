import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yr982vbwi.css';
import '../../css/w/wrtx5ysux.css';
import '../../css/f/f_xi15btu.css';
import '../../css/g/gmvua2thu.css';
import '../../css/r/rv7cc1byc.css';
import '../../css/p/pzg8riqkq.css';
import '../../css/p/pxmg8e-4j.css';
import '../../css/a/aqq7xibyy.css';
import '../../css/d/drkeb87uy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow yr982vbwi"/><path class="wm-shadow wrtx5ysux"/><path class="f_xi15btu"/><path class="gmvua2thu"/><path class="rv7cc1byc"/><path class="pzg8riqkq"/><path class="pxmg8e-4j wm-shine"/><path class="aqq7xibyy wm-shine"/><path class="drkeb87uy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:refresh"} {...others} />);
}

export default Component;
