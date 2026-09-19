import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/yrl0j3bil.css';
import '../../css/s/sdym22-ay.css';
import '../../css/k/k6jvlnblj.css';
import '../../css/o/oh16m0wab.css';
import '../../css/q/qy2r5mbet.css';
import '../../css/l/lsv7v_brh.css';
import '../../css/f/fo54nng9o.css';
import '../../css/m/maip_8leg.css';
import '../../css/j/j3kmf57ua.css';
import '../../css/z/zzx6jacbk.css';
import '../../css/y/yw8xofbov.css';
import '../../css/n/n9bjmx5-r.css';
import '../../css/c/cturrzbvg.css';
import '../../css/r/r-y_y3bpe.css';
import '../../css/n/nac7yuhtt.css';
import '../../css/l/l7rvxmkrp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="yrl0j3bil"/><path class="sdym22-ay"/><path class="k6jvlnblj"/><path class="oh16m0wab"/><path class="qy2r5mbet"/><path class="lsv7v_brh"/><path class="fo54nng9o"/><path class="maip_8leg"/><path class="j3kmf57ua"/><path class="zzx6jacbk"/><path class="yw8xofbov"/><path class="n9bjmx5-r"/><path class="cturrzbvg"/><path class="r-y_y3bpe"/><path class="nac7yuhtt"/><path class="l7rvxmkrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:consignment"} {...others} />);
}

export default Component;
