import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pjkmfgbdp.css';
import '../../css/b/bbdm_gtqb.css';
import '../../css/a/anu252f6r.css';
import '../../css/s/slj835bqd.css';
import '../../css/k/krx5_kgok.css';
import '../../css/b/b4svt7b_k.css';
import '../../css/d/do76gc5jj.css';
import '../../css/y/yuegeacro.css';
import '../../css/m/mg24s1--n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="pjkmfgbdp"/><path class="bbdm_gtqb"/><path class="anu252f6r wm-shine"/><path class="slj835bqd wm-k"/><path class="krx5_kgok wm-a"/><path class="b4svt7b_k wm-s"/><path class="do76gc5jj"/><path class="yuegeacro"/><path class="mg24s1--n wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:mosque"} {...others} />);
}

export default Component;
