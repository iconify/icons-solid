import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kj-r5k7qc.css';
import '../../css/a/ajkh98hml.css';
import '../../css/x/xkop7psru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kj-r5k7qc"/><path class="ajkh98hml"/><path class="xkop7psru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:tuxedo"} {...others} />);
}

export default Component;
