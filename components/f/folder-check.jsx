import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vdre5g_ef.css';
import '../../css/q/qzj5_wbjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vdre5g_ef"/><path class="qzj5_wbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-check"} {...others} />);
}

export default Component;
