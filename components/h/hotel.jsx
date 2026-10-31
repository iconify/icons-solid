import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ib_kton3a.css';
import '../../css/y/yht2054tk.css';
import '../../css/c/cxurz19ze.css';
import '../../css/g/ghj7250pc.css';
import '../../css/a/a1gzcdbmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ib_kton3a wm-shadow"/><path class="yht2054tk"/><path class="cxurz19ze"/><path class="ghj7250pc"/><path class="a1gzcdbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:hotel"} {...others} />);
}

export default Component;
