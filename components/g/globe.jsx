import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jbc13cctw.css';
import '../../css/d/d2zx5ac3u.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/v/vjq2cpb8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jbc13cctw"/><path class="d2zx5ac3u wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="vjq2cpb8i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:globe"} {...others} />);
}

export default Component;
