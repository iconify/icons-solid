import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rsrhfac5n.css';
import '../../css/n/n7jlffbno.css';
import '../../css/m/mmf_5yyup.css';
import '../../css/o/opp44swht.css';
import '../../css/b/b7ivu1zbp.css';
import '../../css/c/cdxwwcl7h.css';
import '../../css/z/zj2p4py0y.css';
import '../../css/z/zkyjh5bzp.css';
import '../../css/a/af3t0nyrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rsrhfac5n"/><path class="n7jlffbno"/><path class="mmf_5yyup"/><path class="opp44swht"/><path class="b7ivu1zbp"/><path class="cdxwwcl7h"/><path class="zj2p4py0y"/><path class="zkyjh5bzp"/><path class="af3t0nyrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-off-broken"} {...others} />);
}

export default Component;
