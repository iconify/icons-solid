import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vlwthcb-o.css';
import '../../css/s/szv0abf7p.css';
import '../../css/t/t0po4kjqp.css';
import '../../css/q/qzuozacwt.css';
import '../../css/g/gw4m2objp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vlwthcb-o"/><path class="szv0abf7p"/><path class="t0po4kjqp"/><path class="qzuozacwt"/><path class="gw4m2objp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:monitor-smartphone"} {...others} />);
}

export default Component;
