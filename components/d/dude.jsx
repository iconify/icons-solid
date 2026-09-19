import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4r20og4p.css';
import '../../css/e/e4h92jbxz.css';
import '../../css/t/ttt4cbcei.css';
import '../../css/z/zq1jgdczr.css';
import '../../css/v/vxu5z0bug.css';
import '../../css/g/guf9nbsfn.css';
import '../../css/s/sxbclp93k.css';
import '../../css/j/jd_v_1b4i.css';
import '../../css/r/rsfy2eb0m.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="q4r20og4p"/><path clip-rule="evenodd" class="e4h92jbxz"/><path clip-rule="evenodd" class="ttt4cbcei"/><path class="zq1jgdczr"/><path class="vxu5z0bug"/><path class="guf9nbsfn"/><path class="sxbclp93k"/><path clip-rule="evenodd" class="jd_v_1b4i"/><path clip-rule="evenodd" class="rsfy2eb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:dude"} {...others} />);
}

export default Component;
