import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/twxqgt_ca.css';
import '../../css/y/yrlyq9bep.css';
import '../../css/h/hf_ak9q6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="twxqgt_ca wm-k"/><path class="wm-k yrlyq9bep"/><path class="hf_ak9q6y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:captions-sketch"} {...others} />);
}

export default Component;
