import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/oo0yw-t5l.css';
import '../../css/n/nk0vs8bzf.css';
import '../../css/y/ypia3mb_z.css';
import '../../css/t/tn2h8tj_y.css';
import '../../css/e/ekc914bfp.css';
import '../../css/u/ueknwocaa.css';
import '../../css/h/h9xdx9byn.css';
import '../../css/i/iiboncc5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="oo0yw-t5l"/><path class="nk0vs8bzf"/><path class="wm-shine ypia3mb_z"/><path class="tn2h8tj_y wm-k"/><path class="ekc914bfp wm-a"/><path class="ueknwocaa"/><path class="h9xdx9byn"/><path class="iiboncc5p wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:thandai"} {...others} />);
}

export default Component;
