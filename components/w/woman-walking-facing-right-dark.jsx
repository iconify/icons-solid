import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijxh3qbrg.css';
import '../../css/d/dka5umbii.css';
import '../../css/u/ud4c-mmcf.css';
import '../../css/d/dqpm57g5q.css';
import '../../css/j/j-abfhbde.css';
import '../../css/s/s09g0vbqo.css';
import '../../css/x/xeetvddmu.css';
import '../../css/t/tshx6nbvs.css';
import '../../css/b/b764dr_mg.css';
import '../../css/y/yqquvnbql.css';
import '../../css/n/nrkwqwbqg.css';
import '../../css/l/lns9lsbhu.css';
import '../../css/s/s3jvozb_i.css';
import '../../css/z/zenfkmb9n.css';
import '../../css/a/a5ju24yjj.css';
import '../../css/p/ptws_e2jp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ijxh3qbrg"/><path class="dka5umbii"/><path class="ud4c-mmcf"/><path class="dqpm57g5q"/><path class="j-abfhbde"/><path class="s09g0vbqo"/><path class="xeetvddmu"/><path class="tshx6nbvs"/><path class="b764dr_mg"/><path class="yqquvnbql"/><path class="nrkwqwbqg"/><path class="lns9lsbhu"/><path class="s3jvozb_i"/><path class="zenfkmb9n"/><path class="a5ju24yjj"/><path class="ptws_e2jp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-walking-facing-right-dark"} {...others} />);
}

export default Component;
