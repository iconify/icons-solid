import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjma1yhgw.css';
import '../../css/y/yi3jdwbhm.css';
import '../../css/m/m3ysumzjc.css';
import '../../css/n/namwlibps.css';
import '../../css/w/wrun5cbgh.css';
import '../../css/r/raywrfbun.css';
import '../../css/y/ybx2x2jcx.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/q/qmm05jb2j.css';
import '../../css/i/i6wsb2o0o.css';
import '../../css/o/o5wb09bip.css';
import '../../css/j/jjog_ic5r.css';
import '../../css/p/p-rbry0up.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="yjma1yhgw"/><path class="yi3jdwbhm"/><path class="m3ysumzjc"/><path class="namwlibps"/><path class="wrun5cbgh"/><path class="raywrfbun"/><path class="ybx2x2jcx"/><g class="brzn_0bpr"><path class="qmm05jb2j"/><path class="i6wsb2o0o"/><circle class="o5wb09bip"/><path class="jjog_ic5r"/><path class="p-rbry0up"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:non-potable-water"} {...others} />);
}

export default Component;
