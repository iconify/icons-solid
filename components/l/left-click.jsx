import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nooq6zmfh.css';
import '../../css/x/xee1pjbri.css';
import '../../css/k/kmps4cbpe.css';
import '../../css/x/xyowvbscu.css';
import '../../css/l/lkjwdplgp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nooq6zmfh"/><path class="xee1pjbri"/><path clip-rule="evenodd" class="kmps4cbpe"/><path class="xyowvbscu"/><path class="lkjwdplgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:left-click"} {...others} />);
}

export default Component;
