import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efp3kzgfi.css';
import '../../css/f/feem47bpw.css';
import '../../css/o/oot2ztb2v.css';
import '../../css/w/w08asf3dd.css';
import '../../css/w/wyymuwbiw.css';
import '../../css/h/hvc5zyobi.css';
import '../../css/o/oic06odyv.css';
import '../../css/c/cvm2h-bvi.css';
import '../../css/c/c_gum-b_j.css';
import '../../css/k/kgr-7upmt.css';
import '../../css/d/dpdckkbos.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="efp3kzgfi"/><path class="feem47bpw"/><path class="oot2ztb2v"/><path class="w08asf3dd"/><path class="wyymuwbiw"/><path class="hvc5zyobi"/><path class="oic06odyv"/><path class="cvm2h-bvi"/><path class="c_gum-b_j"/><path class="kgr-7upmt"/><path class="dpdckkbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:conveniencestore"} {...others} />);
}

export default Component;
