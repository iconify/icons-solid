import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nkm6sgnzf.css';
import '../../css/i/ip_8_m38a.css';
import '../../css/i/ik8-5tb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nkm6sgnzf"/><path class="ip_8_m38a"/><circle class="ik8-5tb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:stethoscope"} {...others} />);
}

export default Component;
