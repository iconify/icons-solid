import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mgadqbaed.css';
import '../../css/y/yc4w11sjy.css';
import '../../css/m/mlbw-2baf.css';
import '../../css/n/n4aam7bgp.css';
import '../../css/a/a1n0b8upn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mgadqbaed wm-k"/><path class="wm-k yc4w11sjy"/><path class="mlbw-2baf"/><path class="n4aam7bgp"/><path class="a1n0b8upn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:oven"} {...others} />);
}

export default Component;
