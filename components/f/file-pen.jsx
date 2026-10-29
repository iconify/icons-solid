import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i4s_a-1yt.css';
import '../../css/f/fqitrob5u.css';
import '../../css/h/hsmjbytjh.css';
import '../../css/g/gjam4dbsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="i4s_a-1yt wm-k"/><path class="fqitrob5u wm-s"/><path class="hsmjbytjh"/><path class="gjam4dbsb wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:file-pen"} {...others} />);
}

export default Component;
