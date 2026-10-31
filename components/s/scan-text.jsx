import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a_taffbgq.css';
import '../../css/g/gw_wn-jpu.css';
import '../../css/v/vum19db3u.css';
import '../../css/n/nfyqolnsy.css';
import '../../css/q/q-tlybr1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a_taffbgq wm-shadow"/><path class="gw_wn-jpu"/><path class="vum19db3u"/><path class="nfyqolnsy"/><path class="q-tlybr1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:scan-text"} {...others} />);
}

export default Component;
