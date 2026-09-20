import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq1h-tb3p.css';
import '../../css/w/wttzgyaqd.css';
import '../../css/o/o846h6b7m.css';
import '../../css/t/t1ocrgb_v.css';
import '../../css/s/sn386-j-z.css';
import '../../css/e/eds1_eb7r.css';
import '../../css/o/oss-t4bem.css';
import '../../css/i/i4596qcyg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wq1h-tb3p"/><path class="wttzgyaqd"/><path class="o846h6b7m"/><path class="t1ocrgb_v"/><path class="sn386-j-z"/><path class="eds1_eb7r"/><path class="oss-t4bem"/><path class="i4596qcyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:receptionist-duo"} {...others} />);
}

export default Component;
