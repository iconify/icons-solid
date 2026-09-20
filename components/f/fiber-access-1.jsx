import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/g/gzzfver2g.css';
import '../../css/l/lmcd7tbtm.css';
import '../../css/q/qhsvy0bse.css';
import '../../css/m/mt6cl9exl.css';
import '../../css/x/x9_brz1gw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="gzzfver2g"/><path class="lmcd7tbtm"/><path class="qhsvy0bse"/><path class="mt6cl9exl"/><path class="x9_brz1gw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:fiber-access-1"} {...others} />);
}

export default Component;
