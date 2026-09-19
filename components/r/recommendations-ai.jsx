import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf63v_b0y.css';
import '../../css/i/iknjfgb4p.css';
import '../../css/g/g3qx3tbzy.css';
import '../../css/d/duzok6x2v.css';
import '../../css/t/t90zmkzfd.css';
import '../../css/n/na9tezbwd.css';
import '../../css/t/txm70ob3k.css';
import '../../css/w/wc4511xpz.css';
import '../../css/c/c0wvm7baf.css';
import '../../css/p/p52b0xb1m.css';
import '../../css/y/ys0tm_upc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uf63v_b0y"/><path class="iknjfgb4p"/><path class="g3qx3tbzy"/><path class="duzok6x2v"/><path class="t90zmkzfd"/><path class="na9tezbwd"/><path class="txm70ob3k"/><path class="wc4511xpz"/><path class="c0wvm7baf"/><path class="p52b0xb1m"/><path class="ys0tm_upc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:recommendations-ai"} {...others} />);
}

export default Component;
