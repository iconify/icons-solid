import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxxaractw.css';
import '../../css/g/gt2zmdbsc.css';
import '../../css/a/adzk65bga.css';
import '../../css/c/cfqdmgbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vxxaractw"/><path class="gt2zmdbsc"/><path clip-rule="evenodd" class="adzk65bga"/><path class="cfqdmgbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tea-pod"} {...others} />);
}

export default Component;
