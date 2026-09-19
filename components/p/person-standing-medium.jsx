import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zm7h8gbcz.css';
import '../../css/a/aipblkbbh.css';
import '../../css/r/r-r9tzj5r.css';
import '../../css/y/yhlpftzsf.css';
import '../../css/z/zdmrp_bqr.css';
import '../../css/f/f4hujhtws.css';
import '../../css/z/zcj9oobma.css';
import '../../css/t/trvt_zb5o.css';
import '../../css/j/j8clg3bby.css';
import '../../css/r/rbjaf-beh.css';
import '../../css/x/xvj_p-h2f.css';
import '../../css/h/hdiunsmpd.css';
import '../../css/t/tcml_bceg.css';
import '../../css/b/bo-jan6ls.css';
import '../../css/y/yge2sibzw.css';
import '../../css/s/sa9-jrbtp.css';
import '../../css/t/tzr18xbqh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="zm7h8gbcz"/><path class="aipblkbbh"/><path class="r-r9tzj5r"/><path class="yhlpftzsf"/><path class="zdmrp_bqr"/><path class="f4hujhtws"/><path class="zcj9oobma"/><path class="trvt_zb5o"/><path class="j8clg3bby"/><path class="rbjaf-beh"/><path class="xvj_p-h2f"/><path class="hdiunsmpd"/><path class="tcml_bceg"/><path class="bo-jan6ls"/><path class="yge2sibzw"/><path class="sa9-jrbtp"/><path class="tzr18xbqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-standing-medium"} {...others} />);
}

export default Component;
