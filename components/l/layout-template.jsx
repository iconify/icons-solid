import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bui7dopun.css';
import '../../css/c/cof5qebtw.css';
import '../../css/v/vu2zstb2v.css';
import '../../css/p/p1dgmc-we.css';
import '../../css/g/glooo5bla.css';
import '../../css/r/rlcl8fj1y.css';
import '../../css/h/hv88-cc1x.css';
import '../../css/s/s_txlcdjx.css';
import '../../css/g/gs2iombeu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bui7dopun wm-k"/><path class="cof5qebtw wm-a"/><path class="vu2zstb2v wm-deco"/><path class="p1dgmc-we wm-k"/><path class="glooo5bla wm-a"/><path class="rlcl8fj1y wm-shadow"/><path class="hv88-cc1x wm-shine"/><path class="s_txlcdjx wm-shine"/><path class="gs2iombeu wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:layout-template"} {...others} />);
}

export default Component;
