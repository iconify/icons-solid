import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kaowuknjg.css';
import '../../css/t/tw3edbbnp.css';
import '../../css/x/xd4r41bmd.css';
import '../../css/z/zhhiysb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kaowuknjg"/><path class="tw3edbbnp"/><path class="xd4r41bmd"/><path class="zhhiysb_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layout-dashboard"} {...others} />);
}

export default Component;
