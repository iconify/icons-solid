import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pz1slbcbq.css';
import '../../css/u/u154v_8wc.css';
import '../../css/x/xv6r26bwy.css';
import '../../css/d/d07orurwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pz1slbcbq"/><path class="u154v_8wc"/><path class="xv6r26bwy"/><path class="d07orurwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:broom-broken"} {...others} />);
}

export default Component;
