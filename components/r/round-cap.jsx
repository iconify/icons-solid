import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3w9__hvs.css';
import '../../css/h/h_r-84sqe.css';
import '../../css/a/akigolbem.css';
import '../../css/m/mr0liibob.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w3w9__hvs"/><path class="h_r-84sqe"/><path class="akigolbem"/><path class="mr0liibob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:round-cap"} {...others} />);
}

export default Component;
