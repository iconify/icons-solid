import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyl23qbli.css';
import '../../css/r/rov26d3fj.css';
import '../../css/p/p9va3rymi.css';
import '../../css/g/ggpc0pvyr.css';
import '../../css/m/m4-rq0b8j.css';
import '../../css/y/ynwsf640v.css';
import '../../css/l/ljgygwhfo.css';
import '../../css/c/cij449bzh.css';
import '../../css/r/rie9cxbes.css';
import '../../css/g/gfmyjjb2n.css';
import '../../css/q/q34pwzq2k.css';
import '../../css/q/qlv4uxhmv.css';
import '../../css/k/kmoiy2bty.css';
import '../../css/d/dln7ycm5p.css';
import '../../css/e/el0ghgbew.css';
import '../../css/h/hrtw9spbr.css';
import '../../css/z/zxd_nibet.css';
import '../../css/h/h9iq_m70a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uyl23qbli"/><path class="rov26d3fj"/><path class="p9va3rymi"/><path class="ggpc0pvyr"/><path class="m4-rq0b8j"/><path class="ynwsf640v"/><path class="ljgygwhfo"/><path class="cij449bzh"/><path class="rie9cxbes"/><path class="gfmyjjb2n"/><path class="q34pwzq2k"/><path class="qlv4uxhmv"/><path class="kmoiy2bty"/><path class="dln7ycm5p"/><path class="el0ghgbew"/><path class="hrtw9spbr"/><path class="zxd_nibet"/><path class="h9iq_m70a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:prince-1"} {...others} />);
}

export default Component;
