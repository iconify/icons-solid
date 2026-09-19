import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yu3yqejem.css';
import '../../css/q/qctsrhxrz.css';
import '../../css/n/npiex2b_n.css';
import '../../css/v/vgp5_qbet.css';
import '../../css/f/fctrv8cli.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="yu3yqejem"/><path class="qctsrhxrz"/><path class="npiex2b_n"/><path class="vgp5_qbet"/><path class="fctrv8cli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:melting-face"} {...others} />);
}

export default Component;
