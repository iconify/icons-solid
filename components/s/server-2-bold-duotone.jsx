import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/zawk6smbg.css';
import '../../css/y/ybuibgbim.css';
import '../../css/v/v-g54vo2p.css';
import '../../css/p/pkqmocq4y.css';
import '../../css/u/ua502d5fn.css';
import '../../css/h/hsbeizbun.css';
import '../../css/p/pu9cezbur.css';
import '../../css/i/i4eqhbb5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="zawk6smbg"/><path class="ybuibgbim"/></g><path class="v-g54vo2p"/><path class="pkqmocq4y"/><path class="ua502d5fn"/><path class="hsbeizbun"/><path class="pu9cezbur"/><path class="i4eqhbb5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-2-bold-duotone"} {...others} />);
}

export default Component;
