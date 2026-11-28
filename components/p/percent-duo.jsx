import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb9pkpb7b.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wcdchccgf.css';
import '../../css/t/tgl67pb8o.css';
import '../../css/a/a_wq3zl0j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lb9pkpb7b secondary"/><g class="dt0cm9dhy primary"><path class="wcdchccgf"/><circle class="tgl67pb8o"/><circle class="a_wq3zl0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:percent-duo"} {...others} />);
}

export default Component;
