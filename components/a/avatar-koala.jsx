import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vr6g4wbir.css';
import '../../css/m/m234ctbtt.css';
import '../../css/h/h09nenbba.css';
import '../../css/w/wub90lb0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vr6g4wbir"/><path class="m234ctbtt"/><path class="h09nenbba"/><path class="wub90lb0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-koala"} {...others} />);
}

export default Component;
