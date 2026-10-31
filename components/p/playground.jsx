import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qzn0s5byj.css';
import '../../css/g/gt01pjblh.css';
import '../../css/o/o2p2ofbsf.css';
import '../../css/t/t9dxyfbzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qzn0s5byj wm-shadow"/><path class="gt01pjblh"/><path class="o2p2ofbsf"/><path class="t9dxyfbzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:playground"} {...others} />);
}

export default Component;
