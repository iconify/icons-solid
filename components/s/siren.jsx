import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygduydele.css';
import '../../css/g/g8v283bog.css';
import '../../css/j/jrci10slc.css';
import '../../css/p/p-tt5lbov.css';
import '../../css/t/t5gya8brr.css';
import '../../css/n/nxcl2jbep.css';
import '../../css/b/b1x13tb1j.css';
import '../../css/x/x9a3p2b-o.css';
import '../../css/o/ow91wccoz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k ygduydele"/><path class="g8v283bog wm-s"/><path class="jrci10slc wm-deco"/><path class="p-tt5lbov wm-k"/><path class="t5gya8brr wm-k"/><path class="nxcl2jbep wm-s"/><path class="b1x13tb1j wm-shadow"/><path class="wm-shine x9a3p2b-o"/><path class="ow91wccoz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:siren"} {...others} />);
}

export default Component;
