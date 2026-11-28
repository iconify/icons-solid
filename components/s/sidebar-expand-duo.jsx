import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml0783bkh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqqr_m9av.css';
import '../../css/n/nr7evsbzb.css';
import '../../css/f/fir8rv8zs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ml0783bkh secondary"/><g class="dt0cm9dhy primary"><path class="oqqr_m9av"/><path class="nr7evsbzb"/><path class="fir8rv8zs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sidebar-expand-duo"} {...others} />);
}

export default Component;
