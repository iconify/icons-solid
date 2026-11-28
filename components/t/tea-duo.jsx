import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk0beob5v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w_1v9_n8e.css';
import '../../css/a/adpkyplhr.css';
import '../../css/m/mc118e5te.css';
import '../../css/u/u6bhi9tzq.css';
import '../../css/t/tipgcvbim.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kk0beob5v secondary"/><g class="dt0cm9dhy primary"><path class="w_1v9_n8e"/><path class="adpkyplhr"/><path class="mc118e5te"/><path class="u6bhi9tzq"/><path class="tipgcvbim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tea-duo"} {...others} />);
}

export default Component;
