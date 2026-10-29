import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b7kmzz72u.css';
import '../../css/e/ejxsvlepc.css';
import '../../css/t/t0qr32bvg.css';
import '../../css/k/k4b16eb6u.css';
import '../../css/d/dako-m_sn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b7kmzz72u wm-k"/><path class="ejxsvlepc wm-a"/><path class="t0qr32bvg wm-s"/><path class="k4b16eb6u"/><path class="dako-m_sn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:plum-blossom"} {...others} />);
}

export default Component;
