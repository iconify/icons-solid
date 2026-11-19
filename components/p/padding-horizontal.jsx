import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avdoa0oit.css';
import '../../css/r/rm_5qpbyy.css';
import '../../css/m/mxzr32pkj.css';
import '../../css/n/niubqtbyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="avdoa0oit"/><path class="rm_5qpbyy"/><path clip-rule="evenodd" class="mxzr32pkj"/><path class="niubqtbyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:padding-horizontal"} {...others} />);
}

export default Component;
