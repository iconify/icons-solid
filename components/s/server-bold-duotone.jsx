import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/zawk6smbg.css';
import '../../css/y/ybuibgbim.css';
import '../../css/g/gik45003g.css';
import '../../css/p/payyg1bev.css';
import '../../css/m/my3lg4b9g.css';
import '../../css/r/rr_v0abvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="zawk6smbg"/><path class="ybuibgbim"/></g><path class="gik45003g"/><path class="payyg1bev"/><path class="my3lg4b9g"/><path class="rr_v0abvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-bold-duotone"} {...others} />);
}

export default Component;
