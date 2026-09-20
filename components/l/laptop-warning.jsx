import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgjacgbdh.css';
import '../../css/a/aha1-ub6i.css';
import '../../css/x/xr_nnxb7r.css';
import '../../css/q/qsqmm2bqs.css';
import '../../css/g/gndmqm4qh.css';
import '../../css/e/e132pkwyb.css';
import '../../css/g/g27q691ye.css';
import '../../css/v/vsizy-bmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tgjacgbdh"/><path class="aha1-ub6i"/><path class="xr_nnxb7r"/><path class="qsqmm2bqs"/><path class="gndmqm4qh"/><path class="e132pkwyb"/><path class="g27q691ye"/><path class="vsizy-bmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:laptop-warning"} {...others} />);
}

export default Component;
