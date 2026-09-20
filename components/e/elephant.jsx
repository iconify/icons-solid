import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jpwrzye_q.css';
import '../../css/o/ovpmcrbvs.css';
import '../../css/g/g88p4ubej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jpwrzye_q"/><path class="ovpmcrbvs"/><path class="g88p4ubej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:elephant"} {...others} />);
}

export default Component;
