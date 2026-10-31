import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vbpmzobns.css';
import '../../css/f/fci040b3y.css';
import '../../css/y/y3j3vjb4e.css';
import '../../css/h/hayg57blh.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vbpmzobns"/><path class="fci040b3y wm-shine"/><path class="wm-k y3j3vjb4e"/><path class="hayg57blh wm-a"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:briefcase-medical"} {...others} />);
}

export default Component;
