import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/b/b64mmjchv.css';
import '../../css/k/kb2z5ubdz.css';
import '../../css/d/dez0b2b2a.css';
import '../../css/i/igum5nugl.css';
import '../../css/b/b5y9r7bdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="b64mmjchv"/><path class="kb2z5ubdz"/><path class="dez0b2b2a"/><path class="igum5nugl"/><path class="b5y9r7bdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:circle-dollar-sign"} {...others} />);
}

export default Component;
