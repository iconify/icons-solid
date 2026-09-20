import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uk6drcbwg.css';
import '../../css/x/xqkilo9-z.css';
import '../../css/w/wina51b9f.css';
import '../../css/h/hb1j4b9ig.css';
import '../../css/u/u_htdeyrz.css';
import '../../css/z/zy4ib1bwi.css';
import '../../css/t/t9_rycbxq.css';
import '../../css/w/wk4_j0tpf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uk6drcbwg"/><path class="xqkilo9-z"/><path class="wina51b9f"/><path class="hb1j4b9ig"/><path class="u_htdeyrz"/><path class="zy4ib1bwi"/><path class="t9_rycbxq"/><path class="wk4_j0tpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:loader-filled"} {...others} />);
}

export default Component;
