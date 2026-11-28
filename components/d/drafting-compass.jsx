import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eosf8ub_j.css';
import '../../css/l/lhivpe_dj.css';
import '../../css/p/p-mz6wbtp.css';
import '../../css/d/d49nub01a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="eosf8ub_j"/><path class="lhivpe_dj"/><path class="p-mz6wbtp"/><path class="d49nub01a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:drafting-compass"} {...others} />);
}

export default Component;
