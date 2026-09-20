import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k6_aq-qrg.css';
import '../../css/w/wsne2w3tj.css';
import '../../css/i/iafhy2rfj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="k6_aq-qrg"/><path class="wsne2w3tj"/><path class="iafhy2rfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:music-folder-song"} {...others} />);
}

export default Component;
