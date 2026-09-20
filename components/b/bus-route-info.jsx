import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/d/d_nzicbdt.css';
import '../../css/q/q4q_4kbua.css';
import '../../css/d/d0-fzjr-f.css';
import '../../css/r/rkjgaldxg.css';
import '../../css/u/uqb9wibbo.css';
import '../../css/l/lhm0fltff.css';
import '../../css/z/zr93uhhkx.css';
import '../../css/n/n0dm_v3ma.css';
import '../../css/k/kmnynmbpl.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="d_nzicbdt"/><path class="q4q_4kbua"/><path class="d0-fzjr-f"/><path class="rkjgaldxg"/><path class="uqb9wibbo"/><path class="lhm0fltff"/><path class="zr93uhhkx"/><path class="n0dm_v3ma"/><path class="kmnynmbpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:bus-route-info"} {...others} />);
}

export default Component;
