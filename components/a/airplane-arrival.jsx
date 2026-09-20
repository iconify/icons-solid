import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d35i74bsr.css';
import '../../css/j/jjmebnbof.css';
import '../../css/d/dqev-hb5d.css';
import '../../css/z/zs82vrbpc.css';
import '../../css/h/ha1mjnbtc.css';
import '../../css/z/zs9ntlb7n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="d35i74bsr"/><path class="jjmebnbof"/><path class="dqev-hb5d"/><circle class="zs82vrbpc"/><circle class="ha1mjnbtc"/><path class="zs9ntlb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:airplane-arrival"} {...others} />);
}

export default Component;
