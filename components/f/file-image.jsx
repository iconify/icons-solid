import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vnllf5bfp.css';
import '../../css/s/s1ww3gkzw.css';
import '../../css/i/idj_8u8kx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vnllf5bfp wm-k"/><path class="s1ww3gkzw wm-shine"/><path class="idj_8u8kx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:file-image"} {...others} />);
}

export default Component;
