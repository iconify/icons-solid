import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sdo3s5gsn.css';
import '../../css/g/g91qa5pir.css';
import '../../css/m/mx2e90gcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="sdo3s5gsn"/><path class="g91qa5pir wm-a"/><path class="mx2e90gcg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:briefcase-business-solid"} {...others} />);
}

export default Component;
