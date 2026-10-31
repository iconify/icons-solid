import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jbc13cctw.css';
import '../../css/v/v4bqz7bvx.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/j/jyhr50b9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jbc13cctw"/><path class="v4bqz7bvx wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="jyhr50b9u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:volleyball"} {...others} />);
}

export default Component;
