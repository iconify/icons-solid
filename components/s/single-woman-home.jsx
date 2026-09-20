import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_8-m2nux.css';
import '../../css/t/t0akf332f.css';
import '../../css/r/reeg22ocp.css';
import '../../css/x/xyko31wpz.css';
import '../../css/c/c30gs688c.css';
import '../../css/v/vt0vf0v4a.css';
import '../../css/a/a3d1m-b7v.css';
import '../../css/u/upcycbcme.css';
import '../../css/y/y8p03vb1m.css';
import '../../css/x/xfnbrf-qq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d_8-m2nux"/><path class="t0akf332f"/><path class="reeg22ocp"/><path class="xyko31wpz"/><path class="c30gs688c"/><path class="vt0vf0v4a"/><path class="a3d1m-b7v"/><path class="upcycbcme"/><path class="y8p03vb1m"/><path class="xfnbrf-qq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:single-woman-home"} {...others} />);
}

export default Component;
