import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6p55wb8r.css';
import '../../css/o/o9byuqfyt.css';
import '../../css/k/kxfr2ykpw.css';
import '../../css/h/h3wou-l2m.css';
import '../../css/k/kjr8mxb2p.css';
import '../../css/p/pgyzmr0in.css';
import '../../css/y/yyshzubnj.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="n6p55wb8r"/><path class="o9byuqfyt"/><path class="kxfr2ykpw"/><path class="h3wou-l2m"/><path class="kjr8mxb2p"/><path class="pgyzmr0in"/><path class="yyshzubnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:solidity"} {...others} />);
}

export default Component;
