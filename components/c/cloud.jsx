import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t39dhopfz.css';
import '../../css/y/ywpdtn-ac.css';
import '../../css/m/m66k3dbfn.css';
import '../../css/s/sg17w3b_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t39dhopfz"/><path class="ywpdtn-ac"/><path class="m66k3dbfn"/><path class="sg17w3b_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud"} {...others} />);
}

export default Component;
