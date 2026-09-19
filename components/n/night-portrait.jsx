import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4hlkiabp.css';
import '../../css/x/xsrd_h3zs.css';
import '../../css/p/pz0oq_bxc.css';
import '../../css/b/bser5vtcv.css';
import '../../css/b/b3kucqzrv.css';
import '../../css/b/b04496bjq.css';
import '../../css/q/qigyvik8h.css';
import '../../css/n/n50a3-bcu.css';
import '../../css/g/gkhaokxbo.css';
import '../../css/d/dmo-2_bff.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u4hlkiabp"/><g class="xsrd_h3zs"><circle class="pz0oq_bxc"/><circle class="bser5vtcv"/><path class="b3kucqzrv"/></g><path class="b04496bjq"/><g class="qigyvik8h"><circle class="n50a3-bcu"/><circle class="gkhaokxbo"/><path class="dmo-2_bff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:night-portrait"} {...others} />);
}

export default Component;
