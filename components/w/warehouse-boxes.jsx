import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjvvl8bip.css';
import '../../css/m/ms8ietyfi.css';
import '../../css/t/tgcsdlb-u.css';
import '../../css/d/d3hbgnp6h.css';
import '../../css/g/gm8t482oo.css';
import '../../css/a/ac2bnz0fl.css';
import '../../css/z/zkj8d7toa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rjvvl8bip"/><path class="ms8ietyfi"/><path class="tgcsdlb-u"/><path class="d3hbgnp6h"/><path class="gm8t482oo"/><path class="ac2bnz0fl"/><path class="zkj8d7toa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:warehouse-boxes"} {...others} />);
}

export default Component;
