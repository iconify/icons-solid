import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7d74xb2y.css';
import '../../css/l/lsza94btt.css';
import '../../css/o/oa1lesb5q.css';
import '../../css/p/p19y25otx.css';
import '../../css/g/gm44-acyr.css';
import '../../css/k/k149yobgt.css';
import '../../css/t/t958_lwxt.css';
import '../../css/s/s0xhe11wj.css';
import '../../css/d/d1jb17bam.css';
import '../../css/i/ikaneyt5h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x7d74xb2y"/><path class="lsza94btt"/><path class="oa1lesb5q"/><path class="p19y25otx"/><path class="gm44-acyr"/><path class="k149yobgt"/><path class="t958_lwxt"/><path class="s0xhe11wj"/><path class="d1jb17bam"/><path class="ikaneyt5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:appflowy"} {...others} />);
}

export default Component;
