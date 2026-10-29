import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hdcaesm7u.css';
import '../../css/g/gxte5cbbm.css';
import '../../css/k/k99a9ybxg.css';
import '../../css/k/kv56um1-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hdcaesm7u wm-k"/><path class="gxte5cbbm wm-a"/><path class="k99a9ybxg"/><path class="kv56um1-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cash-register"} {...others} />);
}

export default Component;
