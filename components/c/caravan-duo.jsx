import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pq_x2db-v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nvnxxlsue.css';
import '../../css/d/d7dea4fys.css';
import '../../css/m/mszde04rh.css';
import '../../css/e/ew6gvneji.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pq_x2db-v secondary"/><g class="dt0cm9dhy primary"><path class="nvnxxlsue"/><path class="d7dea4fys"/><path class="mszde04rh"/><path class="ew6gvneji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:caravan-duo"} {...others} />);
}

export default Component;
