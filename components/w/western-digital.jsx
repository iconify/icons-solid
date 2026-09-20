import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emqiag-cb.css';
import '../../css/g/g072h9bpx.css';
import '../../css/o/o_r6kqqtm.css';
import '../../css/t/t4pungrii.css';
import '../../css/b/bazlvvbpa.css';
import '../../css/n/nxancsbix.css';

const viewBox = {"width":83,"height":48};
const content = `<g class="ft5dv1b6b"><path class="emqiag-cb"/><path class="g072h9bpx"/><path class="o_r6kqqtm"/><path class="t4pungrii"/><path class="bazlvvbpa"/><path class="nxancsbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:western-digital"} {...others} />);
}

export default Component;
