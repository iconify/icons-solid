import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_n87bb0c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ut001yd_u.css';
import '../../css/b/bfidxfbva.css';
import '../../css/u/ucmfhv7ut.css';
import '../../css/e/e_iyibm6y.css';
import '../../css/u/uh8wcl76k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_n87bb0c secondary"/><g class="dt0cm9dhy primary"><path class="ut001yd_u"/><path class="bfidxfbva"/><path class="ucmfhv7ut"/><path class="e_iyibm6y"/><path class="uh8wcl76k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:satellite-duo"} {...others} />);
}

export default Component;
