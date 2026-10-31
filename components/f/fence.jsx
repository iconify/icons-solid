import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qkpfnb8wp.css';
import '../../css/t/tfgm0hbpa.css';
import '../../css/n/nmubkyb5g.css';
import '../../css/w/wgg3jmb7e.css';
import '../../css/m/mg-52mbpb.css';
import '../../css/x/xzkauxcix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qkpfnb8wp wm-shadow"/><path class="tfgm0hbpa"/><path class="nmubkyb5g"/><path class="wgg3jmb7e"/><path class="mg-52mbpb"/><path class="xzkauxcix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:fence"} {...others} />);
}

export default Component;
