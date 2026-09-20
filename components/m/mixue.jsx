import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_c7dcbqm.css';
import '../../css/w/wlmgyf-ip.css';
import '../../css/p/pb-xvo9ot.css';
import '../../css/a/auxvcdcbi.css';
import '../../css/q/q6ut5c78d.css';
import '../../css/m/mz0o1mb6x.css';
import '../../css/m/mhtj16o_c.css';
import '../../css/b/b-wafnb-s.css';
import '../../css/g/g63g-db7c.css';
import '../../css/o/oralug2qt.css';
import '../../css/c/cgymr-bhp.css';
import '../../css/q/q81xpyznc.css';
import '../../css/s/sm-uvab2f.css';
import '../../css/c/cvyvu7brm.css';
import '../../css/g/gvfg2ccou.css';
import '../../css/d/da7x76e1g.css';
import '../../css/c/ckfps9eyh.css';
import '../../css/z/zly6deb2i.css';

const viewBox = {"width":1243,"height":1544};
const content = `<path class="n_c7dcbqm"/><path class="wlmgyf-ip"/><path class="pb-xvo9ot"/><path class="auxvcdcbi"/><path class="q6ut5c78d"/><path class="mz0o1mb6x"/><path class="mhtj16o_c"/><path class="b-wafnb-s"/><path class="g63g-db7c"/><path class="oralug2qt"/><path class="cgymr-bhp"/><path class="q81xpyznc"/><path class="sm-uvab2f"/><path class="cvyvu7brm"/><path class="gvfg2ccou"/><path class="da7x76e1g"/><path class="ckfps9eyh"/><path class="zly6deb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mixue"} {...others} />);
}

export default Component;
