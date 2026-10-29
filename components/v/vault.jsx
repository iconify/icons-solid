import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yq5t_gbte.css';
import '../../css/z/zux7ngbgx.css';
import '../../css/g/g_r8w1hkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="yq5t_gbte"/><path class="zux7ngbgx"/><path class="g_r8w1hkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:vault"} {...others} />);
}

export default Component;
