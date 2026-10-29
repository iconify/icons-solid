import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p1_-7n0_d.css';
import '../../css/q/qbtxg_ars.css';
import '../../css/i/i028zybqz.css';
import '../../css/x/xf8gb8yzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="p1_-7n0_d wm-k"/><path class="qbtxg_ars wm-a"/><path class="i028zybqz"/><path class="xf8gb8yzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bee"} {...others} />);
}

export default Component;
