import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1ikf6bxi.css';
import '../../css/p/piiefhb4u.css';
import '../../css/t/t94b19a8b.css';
import '../../css/u/uecn3vbjn.css';
import '../../css/q/qp33kjbei.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="p1ikf6bxi"/><path class="piiefhb4u"/><path class="t94b19a8b"/><path class="uecn3vbjn"/><path class="qp33kjbei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:my"} {...others} />);
}

export default Component;
