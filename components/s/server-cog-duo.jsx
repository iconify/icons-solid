import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m5hvigbmi.css';
import '../../css/w/wjcm_kp5a.css';
import '../../css/e/ekmlpmtjg.css';
import '../../css/c/cgi6aebyp.css';
import '../../css/j/jes-ovvpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m5hvigbmi"/><path class="wjcm_kp5a wm-s"/><path class="ekmlpmtjg wm-s"/><path class="cgi6aebyp"/><path class="jes-ovvpz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:server-cog-duo"} {...others} />);
}

export default Component;
