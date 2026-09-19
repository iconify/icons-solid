import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mm_wv7bbg.css';
import '../../css/c/csd4fobqq.css';
import '../../css/e/ei36kmb1r.css';
import '../../css/r/rq5y527ly.css';
import '../../css/x/xj5y-je2a.css';
import '../../css/t/tzk2veq6n.css';
import '../../css/x/xa94dcbhv.css';
import '../../css/o/oc4klebkx.css';
import '../../css/n/n6-4g68lc.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="mm_wv7bbg"/><path class="csd4fobqq"/><path class="ei36kmb1r"/><path class="rq5y527ly"/><path class="xj5y-je2a"/><path class="tzk2veq6n"/><circle class="xa94dcbhv"/><circle transform="scale(-1 1)" class="oc4klebkx"/><path class="n6-4g68lc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:in-tn"} {...others} />);
}

export default Component;
