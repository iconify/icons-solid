import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uz-6ybbfc.css';
import '../../css/y/yvkryzb6g.css';
import '../../css/e/evvnrpb1m.css';
import '../../css/t/ta0zdfd_y.css';
import '../../css/w/wqwkkfban.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uz-6ybbfc"/><path class="yvkryzb6g"/><path class="evvnrpb1m"/><path class="ta0zdfd_y"/><path class="wqwkkfban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-camera-line-duotone"} {...others} />);
}

export default Component;
