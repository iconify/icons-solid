import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dos_yhbgg.css';
import '../../css/a/aaakgqotp.css';
import '../../css/s/sok4_rboc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="dos_yhbgg"/><circle class="aaakgqotp"/><path class="sok4_rboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:music-line"} {...others} />);
}

export default Component;
