import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0lctcbze.css';
import '../../css/h/hq1bfqbrr.css';
import '../../css/x/xkayq0xrs.css';
import '../../css/q/qfbww02we.css';
import '../../css/p/pzpbro-re.css';
import '../../css/a/algdiqbde.css';
import '../../css/b/b0sjkwb1c.css';
import '../../css/e/ejxj4b-9g.css';
import '../../css/t/t0z6xxbpl.css';
import '../../css/z/zw27z_21p.css';
import '../../css/t/tfj7vvbrv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="h0lctcbze"/><g class="hq1bfqbrr"><path class="xkayq0xrs"/><path class="qfbww02we"/><path class="pzpbro-re"/></g><path class="algdiqbde"/><path class="b0sjkwb1c"/><path class="ejxj4b-9g"/><path class="t0z6xxbpl"/><path class="zw27z_21p"/><path class="tfj7vvbrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-gesturing-ok-light-skin-tone"} {...others} />);
}

export default Component;
