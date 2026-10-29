import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/ro3_dxbqw.css';
import '../../css/v/v86w35ypf.css';
import '../../css/q/qbafbepse.css';
import '../../css/w/wimwiwbqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ro3_dxbqw wm-k"/><path class="v86w35ypf wm-a"/><path class="qbafbepse"/><path class="wimwiwbqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:swords"} {...others} />);
}

export default Component;
