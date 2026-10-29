import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wewzyfbiz.css';
import '../../css/h/hwfj2zbsh.css';
import '../../css/q/qygck_omr.css';
import '../../css/i/il_myibjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wewzyfbiz"/><path class="hwfj2zbsh wm-a"/><path class="qygck_omr wm-a"/><path class="il_myibjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:screwdriver-duo"} {...others} />);
}

export default Component;
