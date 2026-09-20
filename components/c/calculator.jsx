import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjme4nbjn.css';
import '../../css/i/im9u8mrja.css';
import '../../css/m/miwtwu-as.css';
import '../../css/e/ef_o6yb9x.css';
import '../../css/h/h5_bokbed.css';
import '../../css/a/ach27abhz.css';
import '../../css/c/c58ma9byn.css';
import '../../css/w/w5skle6jc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="wjme4nbjn"/><rect class="im9u8mrja"/><circle class="miwtwu-as"/><circle class="ef_o6yb9x"/><circle class="h5_bokbed"/><circle class="ach27abhz"/><circle class="c58ma9byn"/><circle class="w5skle6jc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:calculator"} {...others} />);
}

export default Component;
