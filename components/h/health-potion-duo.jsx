import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnlh_-b3y.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e8svjubwx.css';
import '../../css/y/yp_rturvk.css';
import '../../css/z/z41wlabfg.css';
import '../../css/q/q2uypiboo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cnlh_-b3y secondary"/><g class="dt0cm9dhy primary"><path class="e8svjubwx"/><path class="yp_rturvk"/><path class="z41wlabfg"/><path class="q2uypiboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:health-potion-duo"} {...others} />);
}

export default Component;
