import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6m8e3bqb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ey2zvwwdt.css';
import '../../css/o/of57k3czr.css';
import '../../css/k/kxcnz1a6x.css';
import '../../css/p/pueyysbpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary x6m8e3bqb"/><g class="dt0cm9dhy primary"><path class="ey2zvwwdt"/><path class="of57k3czr"/><path class="kxcnz1a6x"/><path class="pueyysbpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:rosette-duo"} {...others} />);
}

export default Component;
