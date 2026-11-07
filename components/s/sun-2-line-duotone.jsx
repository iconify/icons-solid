import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q1m15dbht.css';
import '../../css/x/x_jwp_bge.css';
import '../../css/a/a0gtrrbuj.css';
import '../../css/p/pw_kz6bsy.css';
import '../../css/p/p4-7k1g6n.css';
import '../../css/d/d8lofwkuy.css';
import '../../css/u/u1v9jlb8h.css';
import '../../css/y/y13kl3xsl.css';
import '../../css/x/x3--vlb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="q1m15dbht"/><path class="x_jwp_bge"/><path class="a0gtrrbuj"/><path class="pw_kz6bsy"/><path class="p4-7k1g6n"/><path class="d8lofwkuy"/><path class="u1v9jlb8h"/><path class="y13kl3xsl"/><path class="x3--vlb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sun-2-line-duotone"} {...others} />);
}

export default Component;
