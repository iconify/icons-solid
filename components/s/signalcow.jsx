import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/goujrabnz.css';
import '../../css/k/kcile-63d.css';
import '../../css/p/pyn3nbbhl.css';
import '../../css/j/jmf7-jbgw.css';
import '../../css/p/pcp7bhb5v.css';
import '../../css/e/ei55yc9pq.css';
import '../../css/t/t1f06ltki.css';
import '../../css/j/j89csdb_p.css';
import '../../css/i/ibvfhcbhi.css';
import '../../css/o/op_r22byk.css';
import '../../css/r/rq3gz-bbi.css';
import '../../css/d/dwek5sbna.css';
import '../../css/q/qknp0sbpe.css';
import '../../css/l/l1mfkfb6b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="goujrabnz"/><path class="kcile-63d"/><path class="pyn3nbbhl"/><path class="jmf7-jbgw"/><path class="pcp7bhb5v"/><path class="ei55yc9pq"/><path class="t1f06ltki"/><path class="j89csdb_p"/><path class="ibvfhcbhi"/><path class="op_r22byk"/><path class="rq3gz-bbi"/><path class="dwek5sbna"/><path class="qknp0sbpe"/><path class="l1mfkfb6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:signalcow"} {...others} />);
}

export default Component;
