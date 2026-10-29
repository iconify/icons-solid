import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h1ey343tu.css';
import '../../css/h/hnb8fcyso.css';
import '../../css/x/xqp2_ltmk.css';
import '../../css/y/y5-fxdbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="h1ey343tu"/><path class="hnb8fcyso"/><path class="xqp2_ltmk"/><path class="y5-fxdbyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:voicemail"} {...others} />);
}

export default Component;
