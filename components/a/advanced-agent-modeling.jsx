import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t_ev7s-sv.css';
import '../../css/l/l5y23ru5w.css';
import '../../css/e/egad_2bsg.css';
import '../../css/i/ijh_x_qla.css';
import '../../css/u/ujr09m-6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bi12bsetm"><path class="t_ev7s-sv"/><g class="l5y23ru5w"><path class="egad_2bsg"/><path class="ijh_x_qla"/><path class="ujr09m-6e"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:advanced-agent-modeling"} {...others} />);
}

export default Component;
