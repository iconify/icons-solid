import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xlmqkwltw.css';
import '../../css/i/i46k68_po.css';
import '../../css/o/o52l4h76n.css';
import '../../css/m/m4jdgyb6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xlmqkwltw"/><path class="i46k68_po"/><path class="o52l4h76n"/><path class="m4jdgyb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:banknote-broken"} {...others} />);
}

export default Component;
