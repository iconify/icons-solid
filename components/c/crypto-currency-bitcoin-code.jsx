import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ol0v9_s3b.css';
import '../../css/k/k3lko_b0c.css';
import '../../css/z/zcnoyacdy.css';
import '../../css/j/jd40yjbyv.css';
import '../../css/d/dqidlormg.css';
import '../../css/s/s2oscqbpd.css';
import '../../css/r/rh31a_b4s.css';
import '../../css/w/wbnn5l_uv.css';
import '../../css/p/p754ebbpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ol0v9_s3b"/><path class="k3lko_b0c"/><path class="zcnoyacdy"/><path class="jd40yjbyv"/><path class="dqidlormg"/><path class="s2oscqbpd"/><path class="rh31a_b4s"/><path class="wbnn5l_uv"/><path class="p754ebbpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:crypto-currency-bitcoin-code"} {...others} />);
}

export default Component;
